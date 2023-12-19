// src/App.js
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ChatBot from './components/chatbot';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
};

export default App;


