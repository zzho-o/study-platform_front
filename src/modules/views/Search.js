import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StudyObject from "./StudyObject";

export default function Search({ closeModal }) {
  const title = 1;
  const project = [
    {
      subject: "React,Spring 프로젝트원 모집합니다!",
      date: "2022-09-01",
      limit: 4,
      curNum: 1,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
    {
      subject: "React,Spring 프로젝트원 모집합니다!",
      date: "2022-09-01",
      limit: 4,
      curNum: 1,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
    {
      subject: "React,Spring 프로젝트원 모집합니다!",
      date: "2022-09-01",
      limit: 4,
      curNum: 1,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
    {
      subject: "React,Spring 프로젝트원 모집합니다!",
      date: "2022-09-01",
      limit: 4,
      curNum: 1,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{ mt: 4, ml: 4 }}
        variant="h4"
      >{`${project.length}개의 스터디`}</Typography>
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
          {project.map((item) => (
            <Grid item xs={2} sx={{ ml: 4, mr: 4 }}>
              <StudyObject props={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
