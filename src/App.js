

import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Sidebar from './components/Sidebar';
import Accounts from './pages/Accounts';
import Account from './pages/Account';
import Home from './pages/Home';
import image from "./images/profiles/me.jpg";
import {Row,Col} from 'react-bootstrap';
import "./style.css";
import ngn from "./images/flags/ngn.png";
import usd from "./images/flags/usd.png";
import Convert from './pages/Convert';

const TRACKING_ID = ""; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = function(){

  const [user,loadUser]=useState({
    first_name:"Abraham",
    last_name:"Adetugboboh",
    image:image
});


const [wallets,loadWallets]=useState([
  {
    ticker:"NGN", icon:ngn, address:"**** **** **** 1234", currency:"N", balance:0.00, active:false
  },
  {
    ticker:"USD", icon:usd, address:"**** **** **** 4567", currency:"$", balance:0.00, active:false
  }
]);

   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

return (
  <>
  <Router>
        <Row>
            <Col md={2}>
                <Sidebar/>
            </Col>
            <Col md={10}>
                      <Routes>
                        <Route path='/' element={<Home user={user}/>}/>
                        <Route path='/accounts' element={<Accounts wallets={wallets} user={user}/>}/>
                        <Route path='/account/:ticker' element={<Account user={user}/>}/>
                        <Route path='/payments/convert' element={<Convert user={user}/>}/>
                      </Routes>
            </Col>
        </Row>
    </Router>
  </>
)
}



export default App;
