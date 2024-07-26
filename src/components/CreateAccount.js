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
  ImageList,
  ImageListItem,
  TextField,
  Typography,
} from "@mui/material";

const imgTypes = [
  "images/AvatarGirl.png",
  "images/AvatarGuy.png",
  "images/DefaultAvatar.png",
];

function SimpleDialog(props) {
  const { onClose, selectedChar, open } = props;

  const handleClose = () => {
    onClose(selectedChar);
  };

  const itemData = [
    {
      img: "images/AvatarGirl.png",
      title: "Female avatar",
      char: "Girl",
    },
    {
      img: "images/AvatarGuy.png",
      title: "Male avatar",
      char: "Guy",
    },
    {
      img: "images/DefaultAvatar.png",
      title: "Default avatar",
      char: "Default",
    },
  ];

  const handleCharImgClick = (img) => {
    onClose(img);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose Avatar</DialogTitle>

      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              onClick={() => handleCharImgClick(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedChar: PropTypes.string.isRequired,
};

export const CreateAccount = () => {
  const [data, setData] = useState({
    name: "",
    charType: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const [selctedChar, setSelectedChar] = useState(imgTypes[2]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (char) => {
    setOpen(false);
    setSelectedChar(char);
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
                image={selctedChar}
              />
            </Card>

            <br />
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Select Character
              </Button>
              <SimpleDialog
                selectedChar={selctedChar}
                open={open}
                onClose={handleClose}
              />
            </div>

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
