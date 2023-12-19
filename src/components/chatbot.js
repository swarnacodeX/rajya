import React, { useState } from 'react';
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Add user message
      setMessages([...messages, { text: input, user: true }]);
      // Process user input and generate a response
      processUserInput(input);
      // Clear input field
      setInput('');
    }
  };

  const processUserInput = (input) => {
    // Simple rule-based responses for illustration purposes
    let response = 'I do not understand.';
    if (input.toLowerCase().includes('hello')) {
      response = 'Hi there!';
    } else if (input.toLowerCase().includes('how are you')) {
      response = 'I am just a chatbot, but thanks for asking!';
    } // Add more rules for responses as needed

    // Add bot message to the chat
    setMessages([...messages, { text: response, user: false }]);
  };

  return (
    <div>
      <div style={{ height: '200px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'user' : 'bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={input}
          onChange={handleInput}
          placeholder="Type your message..."
        />
        <button  className="submitbutton" type="submit"><FontAwesomeIcon icon={faPaperPlane} style={{ color: 'black' }}/></button>
      </form>
      <iframe title="Rajya Sahayog.io" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/52fcd70b-8526-4de9-8ae8-b693f6e02443"></iframe>
    </div>
  );
};

export default ChatBot;
