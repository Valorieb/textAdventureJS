import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Choice } from "./Choice";

const StorySteps = ({ step, onChoiceSelect }) => (
  <Card sx={{ backgroundColor: "black", color: "lightblue" }}>
    <CardContent sx={{ margin: "30px" }}>
      <Typography sx={{ margin: "30px", fontSize: "large" }}>
        {step.text}
      </Typography>
      {step.choices?.map((choice, index) => (
        <Choice
          key={index}
          text={choice.text}
          onChoiceSelect={onChoiceSelect}
          nextStep={choice.nextStep}
        />
      ))}
    </CardContent>
  </Card>
);

export default StorySteps;
