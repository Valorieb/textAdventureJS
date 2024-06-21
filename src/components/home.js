import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ButtonLink } from "../utils/Utils";

export const Home = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 600, margin: "auto" }}>
        <CardContent>
          <Typography variant="h2" component="div" sx={{ textAlign: "center" }}>
            Lost in the Woods
          </Typography>

          <Typography>
            Welcome to the official Lost in the Woods text adventure! You can
            have all the fun of being lost in the woods without actually having
            to be in the woods! If you're careful, you might even not get mauled
            by bears!
          </Typography>

          <ButtonLink to="/Story">Play</ButtonLink>
          <ButtonLink to="/CreateAccount">New Game</ButtonLink>
        </CardContent>
      </Card>
    </div>
  );
};
