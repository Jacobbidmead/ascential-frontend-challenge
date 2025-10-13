import { useContext } from "react";
import { FavouritesContext } from "../context/context";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Heading,
  Flex,
  IconButton,
  Link,
} from "@chakra-ui/react";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(FavouritesContext);

  if (!context) {
    return null;
  }
  const { favourites, removeFavourite } = context;

  const venueFavourites = favourites.filter((fav) => fav.type === "venue");
  const eventFavourites = favourites.filter((fav) => fav.type === "event");
  return (
    <>
      <Button variant="plain" onClick={onOpen}>
        <BsLayoutSidebarInset />
      </Button>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" variant="plain" />
          <DrawerHeader px="2" bg="gray.700" color="white" padding="24px">
            Favourites
          </DrawerHeader>
          <Flex gap="10" direction="column">
            {venueFavourites.length > 0 ? (
              <Flex direction="column" gap="2" px="2" py="8">
                <Heading size="sm" mb={2}>
                  Venues
                </Heading>
                {venueFavourites.map((fav) => (
                  <Flex direction="row" gap="2" justify="space-between">
                    <Link as={RouterLink} variant="plain" to={`/venues/${fav.id}`} flex="1">
                      {fav.title}
                    </Link>
                    <IconButton
                      aria-label="Remove favourite"
                      icon={<CloseIcon />}
                      size="xs"
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => removeFavourite(fav.id)}
                    />
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Heading size="sm" px="2" pt="6">
                No Venues Saved
              </Heading>
            )}

            {eventFavourites.length > 0 ? (
              <Flex direction="column" gap="2" px="2" justify="space-between">
                <Heading size="sm" mb={2}>
                  Events
                </Heading>
                {eventFavourites.map((fav) => (
                  <Flex direction="row" gap="2">
                    <Link as={RouterLink} variant="plain" to={`/events/${fav.id}`} flex="1">
                      {fav.title}
                    </Link>
                    <IconButton
                      aria-label="Remove favourite"
                      icon={<CloseIcon />}
                      size="xs"
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => removeFavourite(fav.id)}
                    />
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Heading size="sm" px="2">
                No Events Saved
              </Heading>
            )}
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
