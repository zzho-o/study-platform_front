import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ProductHowItWorks from "./ProductHowItWorks";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { Grid } from "@mui/material";

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
    url: "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400",
    title: "STUDY",
    width: "50%",
    state: "study",
  },
  {
    url: "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400",
    title: "PROJECT",
    width: "50%",
    state: "project",
  },
];

export default function ProductCategories() {
  const [searchBy, setSearchBy] = React.useState("");

  return (
    <Box>
      <Container component="section" sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" marked="center" align="center" component="h2">
          {"간편 회원가입"}
        </Typography>
      </Container>
      <TextField
        noBorder
        placeholder="찾고 있는 스터디나 프로젝트의 내용을 적어주세요"
        variant="outlined"
        sx={{ width: "50%", mt: 0, mb: 5 }}
      />

      <TextField
        noBorder
        placeholder="찾고 있는 스터디나 프로젝트의 내용을 적어주세요"
        variant="outlined"
        sx={{ mt: 0, mb: 5 }}
      />
      <Button type="submit" color="primary" variant="contained" sx={{ mb: 5 }}>
        검색
      </Button>
    </Box>
  );
}
