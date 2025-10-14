import React from "react";
import { SimpleGrid, Card, Image, Heading, Flex, VStack, LinkOverlay } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Performers {
  name: string;
  image: string;
  num_upcoming_events: number;
  genres: Genres[];
  url: string;
}

interface Genres {
  name: string;
}
interface InfoTabProps {
  performers: Performers[];
}

const InfoTab: React.FC<InfoTabProps> = ({ performers }) => {
  return (
    <SimpleGrid spacing="10" columns={3} minChildWidth="350px">
      {performers &&
        performers.map(({ name, image, num_upcoming_events, genres, url }, index) => (
          <Card
            variant="outline"
            overflow="hidden"
            bg="gray.50"
            borderColor="gray.200"
            p="4"
            _hover={{ bg: "gray.100" }}
            key={index}>
            <VStack align="start" spacing={4}>
              <Heading size="md">{name}</Heading>
              <LinkOverlay
                as={Link}
                to={url}
                display="block"
                w="100%"
                target="_blank"
                rel="noopener noreferrer">
                <Image src={image} alt={name} w="100%" objectFit="contain" borderRadius="md" />
              </LinkOverlay>
              <Heading size="sm">{num_upcoming_events} upcoming events</Heading>

              <Heading size="sm">Genres</Heading>
              <Flex wrap="wrap" gap={2}>
                {genres &&
                  genres.map((genre, i) => (
                    <Heading key={i} size="xs" px={2} py={1} bg="gray.200" borderRadius="md">
                      {genre.name}
                    </Heading>
                  ))}
              </Flex>
            </VStack>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default InfoTab;
