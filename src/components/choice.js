import { Card } from "@mui/material";

export const choice = ({ text, onChoiceSelected }) => {
  const handleChoiceClick = () => {
    // Handle the player's choice by invoking the callback provided in the props.
    onChoiceSelected(text);
  };

  return (
    <Card>
      <div>
        <p>{text}</p>
        <button onClick={handleChoiceClick}>Choose</button>
      </div>
    </Card>
  );
};
