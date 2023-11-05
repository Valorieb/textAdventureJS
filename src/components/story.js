import { Card } from "@mui/material";
import StorySteps from "./StorySteps";
import { useState } from "react";

export const Story = () => {
  const [storyStep, setStoryStep] = useState(0);
  const storyContent = [
    {
      text: `You wake up as if from a long and deep sleep. Disoriented. 
      The world around you is a blur. Slowly, though, it comes into focus. 
      You are lying on your back. Foliage rises endlesssly toward the sky. 
      At least, you assume there is sky. You can't see much sky beyond the 
      dense cover of the leaves. Your head aches. You can't remember how you 
      got here on the forest floor.`,
      choices: [
        { text: `Try to remember`, nextStep: 1 },
        { text: `Examine surroundings`, nextStep: 2 },
      ],
    },
    {
      storyStep: 1,
      text: `You vaguely remember something about a group of people you were with.
      Were there two others? Or was it more like five? You strain to see their faces...
      but your head starts throbbing in pain.`,
      choices: [{ text: `Examine surroundings`, nextStep: 2 }],
    },
    {
      storyStep: 2,
      text: `You stand up and look around.`,
      choices: [],
    },
  ];
  const currentStep = storyContent[storyStep];

  const handleChoice = (nextStep) => {
    setStoryStep(nextStep);
  };

  return (
    <Card sx={{ minWidth: 600, maxWidth: 800, margin: "auto" }}>
      <StorySteps step={currentStep} onChoiceSelect={handleChoice} />
    </Card>
  );
};
