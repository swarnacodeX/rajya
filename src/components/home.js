
import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home(){
  const [iframeVisible, setIframeVisible] = useState(false);
  let navigate =useNavigate();
  const tochatbot = () => {
    navigate("/chatbot");
  };
  const handleButtonClick = () => {
    // Toggle the visibility of the iframe when the button is clicked
    setIframeVisible(!iframeVisible);
  };

  
  return (
    <div className="backgroundhome">
        <label className='rajya-label'> Welcome to Rajya Sahayog</label>
        <label className='team-label'>Xenial Y2K</label>
        <button className="defence-button" onClick={tochatbot}></button>
      <button className="aviation-button" onClick={tochatbot}><label className='aviation-label'> Civil Aviation</label></button>
      <button className="homeaffairs-button" onClick={tochatbot}><label className='homeaffairs-label'>Home Affairs</label></button>
      <button className="emergency-button" onClick={handleButtonClick}>{iframeVisible ? '' : ''}
        Emergency Help?</button>{iframeVisible && (
        <iframe  className="chat" title="Rajya Sahayog.io" width="350" height="430" allow="microphone;" 
        src="https://console.dialogflow.com/api-client/demo/embedded/52fcd70b-8526-4de9-8ae8-b693f6e02443"></iframe>
      )}
    </div>
  );
};

export default Home;
