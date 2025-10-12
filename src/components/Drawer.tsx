import React, { useContext } from "react";
import { FavouritesContext } from "../context/context";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(FavouritesContext);

  if (!context) {
    return <div>Unabl to add favourite</div>;
  }
  const { favourites } = context;
  // sort columns by type
  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favourites</DrawerHeader>
          {favourites.map((favourite) => (
            <>
              <div>{favourite.title}</div>
            </>
          ))}
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
