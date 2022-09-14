import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "../components/Button";

export default function StudyObject({ props }) {
  return (
    <Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.subject}
          subheader={props.date}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://media.dongwon.com/assets/_temp/post/191205/01.jpg"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {`기간:${props.period}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`정원:${props.curNum}/${props.limit}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`장소:${props.place}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Button>
  );
}
