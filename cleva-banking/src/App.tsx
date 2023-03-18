import React from 'react';
import Navbar from "./components/Navbar"
import Info from './components/Info';
import Hero from "./components/Hero"
import './App.css';
import StopStressing from './components/StopStressing';
import PaymentInfo from './components/PaymentInfo';
import Convert from './components/Convert';

function App() {
  return (
    <div className="">
     <Navbar />
     <Info />
     <StopStressing />
     <PaymentInfo />
     <Convert />
    </div>
  );
}

export default App;
