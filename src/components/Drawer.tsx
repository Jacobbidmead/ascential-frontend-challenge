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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(FavouritesContext);

  if (!context) return null;

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

          <Flex direction="column" gap="4" px="2" py="4">
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Heading size="sm" flex="1" textAlign="left">
                    Venues {venueFavourites.length}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {venueFavourites.length > 0 ? (
                    venueFavourites.map((fav) => (
                      <Flex
                        key={fav.id}
                        direction="row"
                        gap="2"
                        justify="space-between"
                        align="center"
                        mb="2">
                        <Link as={RouterLink} to={`/venues/${fav.id}`} flex="1">
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
                    ))
                  ) : (
                    <Heading size="xs" color="gray.500">
                      No Venues Saved
                    </Heading>
                  )}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Heading size="sm" flex="1" textAlign="left">
                    Events {eventFavourites.length}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {eventFavourites.length > 0 ? (
                    eventFavourites.map((fav) => (
                      <Flex
                        key={fav.id}
                        direction="row"
                        gap="2"
                        justify="space-between"
                        align="center"
                        mb="2">
                        <Link as={RouterLink} to={`/events/${fav.id}`} flex="1">
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
                    ))
                  ) : (
                    <Heading size="xs" color="gray.500">
                      No Events Saved
                    </Heading>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
