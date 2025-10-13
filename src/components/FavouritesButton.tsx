import React, { useContext } from "react";
import { FavouritesContext } from "../context/context";
import { Button } from "@chakra-ui/react";
import { FavouriteItem } from "../types/types";
import { buildFavourite } from "../utils/favourites";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

interface FavouritesButtonProps {
  id: string | number;
  title: string;
  type: FavouriteItem["type"];
}

const FavouritesButton: React.FC<FavouritesButtonProps> = ({ id, title, type }) => {
  const context = useContext(FavouritesContext);
  if (!context) return null;

  const { addFavourite, removeFavourite, isFavourite } = context;

  const item: FavouriteItem = { id: id.toString(), type, title };
  const favourited = isFavourite?.(item) ?? false;

  return (
    <>
      {!favourited ? (
        <Button
          sx={{ padding: 0 }}
          size="sm"
          variant="plain"
          onClick={() => addFavourite(buildFavourite(type, id, title))}>
          <IoIosHeartEmpty />
        </Button>
      ) : (
        <Button
          sx={{ padding: 0 }}
          size="sm"
          variant="plain"
          onClick={() => removeFavourite(id.toString())}>
          <IoIosHeart />
        </Button>
      )}
    </>
  );
};

export default FavouritesButton;
