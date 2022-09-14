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
      limit: 6,
      curNum: 3,
      period: "2022-09-01 - 2022-09-08",
      place: "서울 마포구",
    },
    {
      subject: "React 스터디원 모집합니다",
      date: "2022-09-03",
      limit: 5,
      curNum: 2,
      period: "2022-09-03 - 2022-09-13",
      place: "서울 광진구",
    },
    {
      subject: "React,JavaScript 스터디원 모집합니다.",
      date: "2022-09-07",
      limit: 4,
      curNum: 1,
      period: "2022-09-07 - 2022-09-10",
      place: "인천 연수구",
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
