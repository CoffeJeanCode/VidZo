import { Button } from "@material-ui/core";
import { useSocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useSocketContext();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h3>{call.name} is calling</h3>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
