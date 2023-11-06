import { Card } from "@mui/material";
import StorySteps from "./StorySteps";
import { useState } from "react";

export const Story = () => {
  const [storyStep, setStoryStep] = useState(0);
  const storyContent = [
    {
      storyStep: 0,
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
      text: `Slowly, you stand. Looking around, you see you are at the top of a hill.
      Gnarled roots and underbrush cover the forest floor making for uneven footing.
      At the bottom of the hill, you see a backpack with its contents spilled out.
      To the south, the terrain becomes steep and mountainous. To the west, you see an
      enourmous log. A thick wall of brambles and pine trees blankets the east.
      
      Where will you go?`,
      choices: [
        { text: `North, down the hill`, nextStep: 3 },
        { text: `East toward the brambles`, nextStep: 4 },
        { text: `South toward the mountain`, nextStep: 5 },
        { text: `West toward the log`, nextStep: 6 },
        { text: `Try to remember`, nextStep: 1 },
      ],
    },
    {
      storyStep: 3,
      text: `You slowly inch toward the steep hill in front of you.
    Peering over the edge, you realize it is probably too steep to safely climb down.
    You'll have to find another way down.`,
      choices: [{ text: `Examine surroundings`, nextStep: 12 }],
    },
    {
      storyStep: 4,
      text: `As you approach the brambles you realize these are not
    just any old brambles. They are full of juicy blackberries!`,
      choices: [
        { text: "Pick blackberries", nextStep: 7 },
        { text: `Get bearings`, nextStep: 8 },
      ],
    },
    {
      storyStep: 5,
      text: `Heading south, you find yourself among some beautiful, white,
    birch trees. You let out a sigh of relief. The ground is much more even under your feet here. 
    Ahead of you, a mountain juts to the sky. Through the birchtrees, you
    see the gaping mouth of a cave.`,
      choices: [],
    },
    {
      storyStep: 6,
      text: `A large, hollow log lies on its side. It is covered in moss
    and mushrooms.`,
      choices: [
        { text: `Pick mushrooms`, nextStep: 9 },
        { text: `Look inside log`, nextStep: 10 },
        { text: `Get bearings`, nextStep: 11 },
      ],
    },
    {
      storyStep: 7,
      text: `Careful of the thorns, you grab handfulls of berries and stuff your face.
    You hadn't even realized how hungry you were. The sweet juice drips through your fingers
    and down the corners of your mouth staining your skin purple. You
    have never tasted more delicious blackberries.`,
      choices: [{ text: `Get bearings`, nextStep: 8 }],
    },
    {
      storyStep: 8,
      text: `To the west is the patch of forest where you first awakened. A large, decaying tree looms to the North. To the South are large, gray, boulders.`,
      choices: [
        { text: `return to where you began`, nextStep: 12 },
        { text: `Head toward the dead tree`, nextStep: 13 },
        { text: `Go south toward the boulders`, nextStep: 14 },
        { text: "Pick blackberries", nextStep: 7 },
      ],
    },
    {
      storyStep: 9,
      text: `You stoop down and pluck some brown mushrooms from the base
    of the mossy log. Are these safe to eat?`,
      choices: [],
    },
    {
      storyStep: 10,
      text: `Peering inside the hollow log, you catch a glimpse of
    something moving. A frog hops away through a crack in the log after 
    meeting your eye`,
      choices: [],
    },
    {
      storyStep: 11,
      text: `To the north you see a large, gnarled tree. East is where you
    woke up. There is a large wall of solid rock to the west. And to the south is a mountain.`,
      choices: [],
    },
    {
      storyStep: 12,
      text: `You are at the top of a hill.
    Gnarled roots and underbrush cover the forest floor making for uneven footing.
    At the bottom of the hill, you see a backpack with its contents spilled out.
    To the south, the terrain becomes steep and mountainous. To the west, you see an
    enourmous log. A thick wall of brambles and pine trees blankets the east.
    
    Where will you go?`,
      choices: [
        { text: `North, down the hill`, nextStep: 3 },
        { text: `East toward the brambles`, nextStep: 4 },
        { text: `South toward the mountain`, nextStep: 5 },
        { text: `West toward the log`, nextStep: 6 },
        { text: `Try to remember`, nextStep: 1 },
      ],
    },
    { storyStep: 13, text: ``, choices: [] },
    { storyStep: 14, text: ``, choices: [] },
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
