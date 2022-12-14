import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import MainDetailSearch from "./MainDetailSearch";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: "https://media.dongwon.com/assets/_temp/post/191205/01.jpg",
    title: "STUDY",
    width: "50%",
    state: "study",
  },
  {
    url: "http://jobfactory.or.kr/__files/tmp/3077114738_03479142.jpg",
    title: "PROJECT",
    width: "50%",
    state: "project",
  },
];

export default function ProductCategories() {
  const [searchBy, setSearchBy] = React.useState("");
  const navigate = useNavigate();

  return (
    <Box>
      <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          {"WELCOME TO ??????!"}
        </Typography>
        <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
          {images.map((image) => (
            <ImageIconButton
              key={image.title}
              style={{
                width: image.width,
              }}
              onClick={() => {
                setSearchBy(image.state);
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center 40%",
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <ImageBackdrop className="imageBackdrop" />
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "common.white",
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked" />
                </Typography>
              </Box>
            </ImageIconButton>
          ))}
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          noBorder
          placeholder="?????? ?????? ???????????? ??????????????? ????????? ???????????????"
          variant="outlined"
          sx={{ width: "60%", mt: 0, mb: 5 }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "20%", mb: 5 }}
          onClick={() => navigate("/SubjectSearch")}
        >
          ??????
        </Button>
      </Box>
      <MainDetailSearch searchBy={searchBy} />
    </Box>
  );
}
