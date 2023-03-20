import React from 'react';
import Navbar from "./components/Navbar"
import Info from './components/Info';
import Hero from "./components/Hero"
import './App.css';
import StopStressing from './components/StopStressing';
import PaymentInfo from './components/PaymentInfo';
import Convert from './components/Convert';
import SendMoney from './components/SendMoney';
import CreateVirtual from './components/CreateVirtual';
import TrackAll from './components/TrackAll';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
     <Navbar />
     <Info />
     <StopStressing />
     <PaymentInfo />
     <Convert />
     <SendMoney />
     <CreateVirtual />
     <TrackAll />
     <Footer />
    </div>
  );
}

export default App;
