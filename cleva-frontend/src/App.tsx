import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './components/Auth/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
