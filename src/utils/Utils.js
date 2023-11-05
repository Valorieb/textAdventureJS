import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
};
