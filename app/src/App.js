

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
import Convert from './pages/Convert';
import Payments from './pages/Payments';
import MakePayment from './pages/MakePayment';
import Recipients from './pages/Recipients';
import {getVirtualAccounts,getRecipients,getLinkedAccounts,getTransactions} from "./API";
import {LinkAcctProvider} from './context/LinkAcctContext';

ReactGA.initialize("TRACKING_ID");
function App(){
  const [user,loadUser]=useState({});
  const [recipients,loadRecipients]=useState([]);
  const [accounts,loadAccounts]=useState([]);
  const [linkedAccounts,loadLinkedAccounts]=useState([]);
  const [payments, loadPayments] = useState([]);

  const listAccounts = async () => {
    var accounts= await getVirtualAccounts();
    console.log(accounts.data);
    if(accounts.data.VirtualAccountSummaryList){
      loadAccounts(accounts.data.VirtualAccountSummaryList);
    }
    }

  const listRecipients = async () => {
    var recipients= await getRecipients();
    if(recipients.data.RecipientSummaryList){
    loadRecipients(recipients.data.RecipientSummaryList);
    }
    }


  const listLinkedAccounts = async () => {
    var accounts= await getLinkedAccounts();
    loadLinkedAccounts(accounts.data.LinkedAccountSummaryList);
    }

  const listTransactions = async () => {
    var transactions = await getTransactions();
    if(transactions.data.TransactionsSummaryList){
      loadPayments(transactions.data.TransactionsSummaryList);
    }
}


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    listAccounts();
    listRecipients();
    listLinkedAccounts();
    listTransactions();

    //sdk implementation to load user profile
    loadUser({
        UserID: "user-h1ILAYQnc43ZfxZmru152N8Ao",
        FullName: {
          FirstName: "Abraham",
          MiddleName: "Demilade",
          LastName: "Adetugboboh"
        },
        BankName: "Access Bank",
        AccountNumber: "1434282925",
        Image:image
    });
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
                        <Route path='/accounts' element={<LinkAcctProvider><Accounts accounts={accounts} linkedAccounts={linkedAccounts} user={user}/></LinkAcctProvider>}/>
                        <Route path='/account' element={<Account user={user} transactions={payments} listTransactions={listTransactions}/>}/>
                        <Route path='/recipients' element={<Recipients user={user} recipients={recipients} listRecipients={listRecipients}/>}/>
                        <Route path='/payments' element={<Payments user={user} transactions={payments}/>}/>
                        <Route path='/payments/convert' element={<Convert user={user}/>}/>
                        <Route path='/payments/create' element={<MakePayment user={user} recipients={recipients} accounts={accounts} listTransactions={listTransactions} linkedAccounts={linkedAccounts}/>}/>
                      </Routes>
            </Col>
        </Row>
    </Router>
  </>
)
}



export default App;


