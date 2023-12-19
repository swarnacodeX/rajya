
import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import sih2023 from './SIH2023.png';
import helpdesk from './Helpdesk.jpg';

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
    <div className="backgroundhome"><img src={sih2023} alt="Description of the image" style={{position: 'fixed', top: '10px', left: '10px',width: '340px', height: '150px',borderRadius: '16px' }}/>
        <label className='rajya-label'> Welcome to Rajya Sahayog</label>
        <label className='team-label'>Xenial Y2K</label>
        <button className="defence-button" onClick={tochatbot}></button>
      <button className="aviation-button" onClick={tochatbot}></button>
      <button className="teacher-button" onClick={tochatbot}></button>
      <button className="homeaffairs-button" onClick={tochatbot}></button>
      <button className="emergency-button" onClick={handleButtonClick}>{iframeVisible ? '' : ''}
        <img src={helpdesk} style={{position: 'fixed', top: '540px', left: '1390px',width: '80px', height: '80px',borderRadius: '60px' }}/></button>{iframeVisible && (
        <iframe  className="chat" title="Rajya Sahayog.io" width="350" height="430" allow="microphone;" 
        src="https://console.dialogflow.com/api-client/demo/embedded/52fcd70b-8526-4de9-8ae8-b693f6e02443"></iframe>
      )}
    </div>
  );
};

export default Home;
