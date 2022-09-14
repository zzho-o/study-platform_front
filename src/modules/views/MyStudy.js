import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StudyObject from "./StudyObject";

export default function Search({ closeModal }) {
  const project = [
    {
      subject: "당근마켓 클론코딩 프로젝트",
      date: "2022-09-01",
      limit: 6,
      curNum: 3,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          marginLeft: 10,
          mr: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 3 }}>
          {project.map((sbj) => (
            <Grid item xs={3} sx={{ ml: 4, mr: 4 }}>
              <StudyObject props={sbj} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
