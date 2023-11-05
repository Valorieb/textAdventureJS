import { Button } from "@mui/material";

export const Choice = ({ text, onChoiceSelect, nextStep }) => {
  return (
    <Button
      sx={{ padding: "10px", margin: "20px" }}
      variant="contained"
      onClick={() => onChoiceSelect(nextStep)}
    >
      {text}
    </Button>
  );
};
