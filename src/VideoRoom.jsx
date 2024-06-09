import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { initializeSession } from './helper';

const VideoRoom = ({
  audioDevice, videoDevice, setLobbySetup
}) => {
  const session = useRef(null);

  const leaveSession = () => {
    if (session.current) {
      session.current?.disconnect();
    }
    setLobbySetup(false);
  }
// Handling all of our errors here by alerting them
  useEffect(() => {
    session.current = initializeSession(audioDevice, videoDevice);
  }, []);

  return (
    <Card className='room'>
      <div id="videos" className='room__content'>
        <div id="publisher" className='room__video publisher'></div>
        <div id="subscriber" className='room__video subscriber'></div>
      </div>
      <Button variant="contained" onClick={leaveSession}>Leave</Button>
    </Card>
  );
}

VideoRoom.propTypes = {
  audioDevice: PropTypes.string,
  videoDevice: PropTypes.string,
  setLobbySetup: PropTypes.func,
}

export default VideoRoom;
