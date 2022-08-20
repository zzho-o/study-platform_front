import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

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
        marginTop: 8,
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
        <Avatar></Avatar>
      </Box>
      <Avatar></Avatar>
      <Avatar></Avatar>
      <Avatar></Avatar>
    </Box>
  );
}
