import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import ForgotPassword from './components/Auth/ForgotPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResetPassword from './components/Auth/ResetPassword';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/register" element={<Register/>} />

    </Routes>
  );
}

export default App;
