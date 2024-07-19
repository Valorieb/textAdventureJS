import { useState } from "react";

import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const charTypes = ["guy", "girl", "default"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose Avatar</DialogTitle>
      <List sx={{ pt: 1 }}>
        {charTypes.map((charType) => (
          <ListItem disableGutters key={charType}>
            <ListItemButton onClick={() => handleListItemClick(charType)}>
              <ListItemText primary={charType} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export const CreateAccount = () => {
  const [data, setData] = useState({
    name: "",
    charType: "",
    password: "",
  });

  //const characters = ["DefaultAvatar.png", "AvatarGuy.png", "AvatarGirl.png"];
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(charTypes[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
            <div>
              <Typography variant="subtitle1" component="div">
                Selected: {selectedValue}
              </Typography>
              <br />
              <Button variant="outlined" onClick={handleClickOpen}>
                Select Character
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </div>
            {/* 
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Button
                variant="text"
                sx={{ margin: "auto" }}
                //onclick={handleOpenDialogue}
              >
                Select Character
              </Button>
            </Box> */}

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
