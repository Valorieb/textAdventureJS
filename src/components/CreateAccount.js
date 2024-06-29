import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  SimpleDialog,
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
        <CardContent sx={{ margin: "auto" }}>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <TextField
                type="text"
                label="username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                sx={{ margin: "10px" }}
              />

              <TextField
                type="password"
                label="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                sx={{ margin: "10px" }}
              />
              <br />
            </Box>
            <Divider sx={{ margin: "10px" }}></Divider>
            <Card sx={{ height: "110px", width: "110px", margin: "auto" }}>
              <CardMedia
                component="img"
                alt="Default avatar"
                image="/images/DefaultAvatar.png"
              />
            </Card>

            <br />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Button variant="text" sx={{ margin: "auto" }}>
                Select Character
              </Button>
            </Box>
            {/* <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      /> */}

            <br />
            <Divider sx={{ margin: "10px" }}></Divider>
            <Button variant="contained" sx={{ margin: "auto" }}>
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
