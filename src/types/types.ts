export interface FavouriteItem {
  id: string;
  type: "event" | "venue";
  title: string;
}

export interface FavouritesContextType {
  favourites: FavouriteItem[];
  addFavourite: (item: FavouriteItem) => void;
  removeFavourite: (id: string) => void;
}
