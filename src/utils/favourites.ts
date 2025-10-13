import { FavouriteItem } from "../types/types";

export const buildFavourite = (
  type: FavouriteItem["type"],
  id: number | string,
  title: string
): FavouriteItem => ({
  id: id.toString(),
  type,
  title,
});
