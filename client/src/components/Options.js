import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Assessment, Phone, PhoneDisabled } from "@material-ui/icons";
import { useState } from "react";
import { useSocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = ({ children }) => {
  const classes = useStyles();
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } =
    useSocketContext();
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <form className={classes.root} autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                fullWidth
              ></TextField>
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Assessment fontSize="large" />}
                >
                  COPY YOUR ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                label="ID to call"
                value={idToCall}
                onChange={(evt) => setIdToCall(evt.target.value)}
                fullWidth
              ></TextField>
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  color="sencodary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                  className={classes.margin}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    background: "rgba( 212, 212, 212, 0.35 )",
    backdropFilter: "blur( 11px )",
    "-webkit-backdrop-filter": "blur( 11px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
}));

export default Options;
