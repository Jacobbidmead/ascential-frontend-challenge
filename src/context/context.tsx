import React, { createContext, useContext, useState, useEffect } from "react";

export interface FavouriteItem {
  id: string;
  type: "event" | "venue";
  title: string;
}

export interface FavouritesContextType {
  favourites: FavouriteItem[];
  addFavourite: (item: FavouriteItem) => void;
}

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: React.ReactNode }) {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);

  const addFavourite = (item: FavouriteItem) => {
    setFavourites((prev) => [...prev, item]);
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
