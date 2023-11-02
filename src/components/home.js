import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const Home = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 600, margin: "auto" }}>
        <CardContent>
          <Typography variant="h2" component="div" sx={{ textAlign: "center" }}>
            Lost in the Woods
          </Typography>

          <p>
            Welcome to the official, Lost in the Woods text adventure! You can
            have all the fun of being lost in the woods without actually having
            to be in the woods! If you're careful, you might not even get mauled
            by bears!
          </p>
          <Button>Play</Button>
        </CardContent>
      </Card>
    </div>
  );
};
