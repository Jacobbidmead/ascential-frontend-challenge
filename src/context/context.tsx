import React, { createContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { FavouritesContextType, FavouriteItem } from "../types/types";

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<FavouriteItem[]>(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  const toast = useToast();

  const isFavourite = (favourites: FavouriteItem[], item: FavouriteItem) => {
    return favourites.some((prev) => prev.id === item.id);
  };

  const addFavourite = (item: FavouriteItem) => {
    setFavourites((prev) => {
      if (isFavourite(prev, item)) {
        toast({
          title: "Already added",
          description: `${item.title} is already in your favourites.`,
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
        return prev;
      }

      toast({
        title: "Added to favourites",
        description: `${item.title} has been added successfully.`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });

      return [...prev, item];
    });
  };

  const removeFavourite = (idToRemove: string) => {
    setFavourites((prev) => {
      const updated = prev.filter((item) => item.id !== idToRemove);

      if (updated.length < prev.length) {
        toast({
          title: "Removed from favourites",
          description: "Item has been removed successfully.",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      } else {
        toast({
          title: "Item not found",
          description: "Could not find this item in your favourites.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom-left",
        });
      }

      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        isFavourite: (item: FavouriteItem) => isFavourite(favourites, item),
      }}>
      {children}
    </FavouritesContext.Provider>
  );
}
