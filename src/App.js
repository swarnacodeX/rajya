// src/App.js
// App.jsx

import React, { useEffect, useState } from "react";
import Home from './components/home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from './components/login';
import { supabase } from "./supabaseClient";

const App = () => {
  const [session, setSession] = useState(null);
  

  const getSession = async () => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  };

  useEffect(() => {
    getSession();
    
  }, [supabase]);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={session?.access_token ?<Home/>:<Home/> }/>
      
      </Routes>
    </Router>
  );
};

export default App;


