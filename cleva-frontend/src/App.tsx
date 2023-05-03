import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import ForgotPassword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import ResetPassword from './components/Auth/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

    </Routes>
  );
}

export default App;
