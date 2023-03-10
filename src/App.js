

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Sidebar from './components/Sidebar';
import Accounts from './pages/Accounts';
import Home from './pages/Home';
import {Container,Row,Col} from 'react-bootstrap';
const TRACKING_ID = ""; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = function(){
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
                        <Route path='/' element={<Home/>}/>
                        <Route path='/accounts' element={<Accounts/>}/>
                      </Routes>
            </Col>
        </Row>
    </Router>
  </>
)
}



export default App;
