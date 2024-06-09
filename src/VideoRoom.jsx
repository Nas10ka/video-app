import { useEffect } from 'react'
import OT from '@opentok/client';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { handleError, API_KEY, TOKEN, SESSION_ID } from './helper';

const initializeSession = (audioDevice, videoDevice) => {
  console.log('init session')
  const session = OT.initSession(API_KEY, SESSION_ID);

   // Subscribe to a newly created stream
  session.on('streamCreated', (event) => {
    const subscriberOptions = {
      insertMode: 'append'
    };
    session.subscribe(event.stream, 'subscriber', subscriberOptions, handleError);
  });
  // Create a publisher
  const publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%',
    videoSource: videoDevice,
    audioSource: audioDevice,
  }, handleError);

  // Connect to the session
  session.connect(TOKEN, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
  return session;
}
const VideoRoom = ({
  audioDevice, videoDevice, setLobbySetup
}) => {
  const leaveSession = () => {
    setLobbySetup(false);
  }
// Handling all of our errors here by alerting them
  useEffect(() => {
    const session = initializeSession(audioDevice, videoDevice);

    return () => {
      if (session) {
        session.disconnect();
      }
    }
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
