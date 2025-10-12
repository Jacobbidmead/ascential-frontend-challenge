import React, { createContext, useContext, useState, useEffect } from "react";
import { FavouritesContextType, FavouriteItem } from "../types/types";

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);
  console.log(favourites);

  const isFavourite = (favourites: FavouriteItem[], item: FavouriteItem) => {
    return favourites.some((prev) => prev.id === item.id);
  };

  const addFavourite = (item: FavouriteItem) => {
    setFavourites((prev) => {
      if (isFavourite(prev, item)) {
        return prev;
      } else {
        return [...prev, item];
      }
    });
  };

  // create new array with elements that arent equal to the current elements id
  const removeFavourite = (idToRemove: string) => {
    setFavourites((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
