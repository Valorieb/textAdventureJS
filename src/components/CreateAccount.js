import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

export const CreateAccount = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <Card sx={{ minWidth: 275, maxWidth: 600, margin: "auto" }}>
        <CardContent>
          <Typography variant="h2" component="div" sx={{ textAlign: "center" }}>
            Lost in the Woods
          </Typography>
          <Divider sx={{ margin: "10px" }}></Divider>
          <Typography
            variant="h4"
            component="div"
            sx={{ textAlign: "center", margin: "10px" }}
          >
            Create Account
          </Typography>
          <form>
            <TextField
              type="text"
              label="username"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              sx={{ margin: "10px" }}
            />
            <br />
            <TextField
              type="password"
              label="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              sx={{ margin: "10px" }}
            />
            <br />
            <Card sx={{ height: "310px", width: "310px", margin: "10px" }}>
              <img
                alt="Default avatar"
                src="./images/DefaultAvatar.png"
                sx={{ height: "300px", width: "300px" }}
              ></img>
            </Card>
            <br />
            <Box
              component="section"
              sx={{ p: 2, border: "1px dashed grey", textAlign: "center" }}
            >
              Select your character
            </Box>
            <br />
            <Button variant="contained" sx={{ margin: "10px" }}>
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
