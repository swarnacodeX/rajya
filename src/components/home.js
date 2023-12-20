
import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import sih2023 from './SIH2023.png';
import helpdesk from './Helpdesk.jpg';
import { supabase } from "../supabaseClient";

function Home(){
  let navigate=useNavigate();
  const [iframeVisible, setIframeVisible] = useState(false);
 
  
  const handleButtonClick = () => {
    // Toggle the visibility of the iframe when the button is clicked
    setIframeVisible(!iframeVisible);
  };
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    navigate("/");
    if (error) {
      console.log(error);
    }};

  
  return (
    <div className="backgroundhome"><img src={sih2023} alt="Description of the image" style={{position: 'fixed', top: '10px', left: '10px',width: '340px', height: '150px',borderRadius: '16px' }}/>
        <label className='rajya-label'> Welcome to Rajya Sahayog</label>
        <label className='team-label'>Xenial Y2K</label>
        <button className="defence-button"></button>
      <button className="aviation-button"></button>
      <button className="teacher-button"></button>
      <button className="homeaffairs-button"></button>
      <button className="logout" onClick={logout}>LOGOUT</button>

      <button className="emergency-button" onClick={handleButtonClick}>{iframeVisible ? '' : ''}
        <img src={helpdesk} style={{position: 'fixed', top: '540px', left: '1390px',width: '80px', height: '80px',borderRadius: '60px' }}/></button>{iframeVisible && (
        <iframe  className="chat" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/861b1118-74af-4767-b90d-293eaa833d41"></iframe>
      )}
    </div>
  );
};

export default Home;
