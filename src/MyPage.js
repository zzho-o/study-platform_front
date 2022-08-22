import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "./modules/components/Typography";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        marginLeft: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex",
      }}
    >
      <Box
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Avatar sx={{ width: "150px", height: "150px" }}></Avatar>
      </Box>
      <Typography variant="h4" align="left" component="h2">
        {"zzho"}
      </Typography>
      <Avatar></Avatar>
      <Avatar></Avatar>
      <Avatar></Avatar>
    </Box>
  );
}
