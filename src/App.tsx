import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/pages/main';
import Login from './views/pages/auth/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
