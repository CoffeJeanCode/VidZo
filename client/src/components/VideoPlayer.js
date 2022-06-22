import React from "react";
import { Grid, Typography, Paper, makeStyles } from "@material-ui/core";

import { useSocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useSocketContext();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            ></video>
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper} elevation={0}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            ></video>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    transform: "rotateY(180deg)",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "1rem 2rem",
    margin: "10px",
    background: "rgba( 212, 212, 212, 0.35 )",
    backdropFilter: "blur( 11px )",
    "-webkit-backdrop-filter": "blur( 11px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
}));

export default VideoPlayer;
