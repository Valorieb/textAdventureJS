import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Choice } from "./Choice";

const StorySteps = ({ step, onChoiceSelect }) => (
  <CardContent>
    <Typography>{step.text}</Typography>
    {step.choices?.map((choice, index) => (
      <Choice
        key={index}
        text={choice.text}
        onChoiceSelect={onChoiceSelect}
        nextStep={choice.nextStep}
      />
    ))}
  </CardContent>
);

export default StorySteps;
