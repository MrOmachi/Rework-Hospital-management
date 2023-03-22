

import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import gtb from "./images/banks/gtb.png";

import Convert from './pages/Convert';
import Payments from './pages/Payments';
import MakePayment from './pages/MakePayment';
import Recipients from './pages/Recipients';

ReactGA.initialize("TRACKING_ID");
function App(){
  const [user,loadUser]=useState({});
  const [recipients,loadRecipients]=useState([]);  
  const [accounts,loadAccounts]=useState([]);
  const [payments, loadPayments] = useState([]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    //sdk implementation to load user profile
    loadUser({
      firstName:"Abraham",
      lastName:"Adetugboboh",
      image:image
    });
    //sdk implementation to load user recipients
    loadRecipients([
      {   country:"US", address:"**** 4567", Name:"Jason Obi"} ,
      {   country:"US", address:"**** 4567", Name:"Jason Obi"} 
    ]);
    //sdk implementation to load virtual accounts
    loadAccounts([
      {
        Name:"NGN",ticker:"NGN", icon:ngn, last4Digits:"1234", currency:"NGN", balance:0.00, active:false,bankName:"",accountName:"",accountNumber:"",type:""},
      {
        Name:"USD",ticker:"USD", icon:usd, last4Digits:"4567", currency:"USD", balance:0.00, active:false,bankName:"",accountName:"",accountNumber:"",type:"" }
    ])
    //sdk used for calling list of payments
    loadPayments([
      {fee:0,Name:"Abel Philip",image:gtb,credit:false,amount:7000,currency:"NGN",type:"Bank transfer",description:"Top-up from GTBank",date:"28 Aug, 2022 03:37:00 PDT"}
    ])
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
                        <Route path='/accounts' element={<Accounts accounts={accounts} user={user}/>}/>
                        <Route path='/account' element={<Account user={user} transactions={payments}/>}/>
                        <Route path='/payments' element={<Payments user={user} transactions={payments}/>}/>
                        <Route path='/recipients' element={<Recipients user={user} recipients={recipients}/>}/>
                        <Route path='/payments/convert' element={<Convert user={user}/>}/>
                        <Route path='/payments/create' element={<MakePayment user={user} recipients={recipients} accounts={accounts}/>}/>
                      </Routes>
            </Col>
        </Row>
    </Router>
  </>
)
}



export default App;
