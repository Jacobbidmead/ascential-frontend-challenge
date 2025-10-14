import React from "react";
import { Grid } from "@chakra-ui/react";

interface Performers {
  name: string;
  image: string;
  num_upcoming_events: number;
  genres: Genres[];
}

interface Genres {
  name: string;
}
interface InfoTabProps {
  id: number;
  performers: Performers[];
}

const InfoTab: React.FC<InfoTabProps> = ({ id, performers }) => {
  return (
    <Grid>
      {performers.map(({ name, image, num_upcoming_events, genres }) => (
        <Grid key={id}>
          <div>{name}</div>
          <img src={image} alt={name} />
          <div>{num_upcoming_events} upcoming events</div>
          {genres.map((genre, i) => (
            <div>{genre.name}</div>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoTab;
