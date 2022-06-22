import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar
        className={classes.appBar}
        position="static"
        color="inherit"
        elevation={0}
      >
        <Typography variant="h2" align="center">
          VidZo
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    background: "rgba( 212, 212, 212, 0.35 )",
    backdropFilter: "blur( 11px )",
    "-webkit-backdrop-filter": "blur( 11px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

export default App;
