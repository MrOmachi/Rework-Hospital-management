

import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import Sidebar from './components/Sidebar';
import Accounts from './pages/Accounts';
import Account from './pages/Account';
import Home from './pages/Home';
import {
        ClevaBankingServiceClient,
        ListVirtualAccountsCommand
      } from '@clevabanking-service/client';
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
  const [linkedAccounts,loadLinkedAccounts]=useState([]);
  const [payments, loadPayments] = useState([]);
  const client = new ClevaBankingServiceClient({
                        endpoint: "https://so4rc6g00a.execute-api.eu-north-1.amazonaws.com/demo"
                    });

  const listAccounts = async () => {
      let accounts = await client.send(new ListVirtualAccountsCommand({}))
      return accounts;
    }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
    //sdk implementation to load user recipients
    loadRecipients([
      {
        RecipientIdentifier: "rec-rePLDXV7kQJIKsh603K9GLIgvq",
        FullName: {
          FirstName: "Atiku",
          MiddleName: "Bola",
          LastName: "Osibanjo"
        },
        Country: "NG",
        Currency: "NGN",
        CountryIcon:ngn,
        TotalTransfers:10000.00,
        LastFourDigits: "3364",
        AccountNumber: "35354466600",
        BankName: "Polaris Bank",
        BankType:"Savings",
        Address: {
          StreetAddress: "11 adesoye St,",
          SecondStreetAddress: "",
          City: "Lagos",
          Country: "NG",
          StateOrTerritory: "Lagos",
          Zipcode: "110021",
          LGA: "Eti-osa"
        }
      },
      {
        RecipientIdentifier: "rec-rePLDXV7kQJIKdd73K9GLIgvq",
        FullName: {
          FirstName: "Peter",
          MiddleName: "Amhed",
          LastName: "Adams"
        },
        Country: "US",
        Currency: "USD",
        CountryIcon:usd,
        LastFourDigits: "5477",
        AccountNumber: "43894594444",
        BankName: "Evolve Bank & Trust",
        RoutingNumber:"22222222",
        BankType:"Checkings",
        TotalTransfers:800.00,
        Address: {
          StreetAddress: "111 Mason St,",
          SecondStreetAddress: "",
          City: "San Francisco",
          Country: "USA",
          StateOrTerritory: "San Franscisco",
          Zipcode: "94105",
          LGA: "CA"
        }
      }
    ]);
    //sdk implementation to load virtual accounts
    console.log("account list:");
    console.log(listAccounts());
    
    // console.log(listAccounts().VirtualAccountSummaryList);
    loadAccounts(listAccounts().VirtualAccountSummaryList);
    loadAccounts([
      {
        VirtualAccountIdentifier: "vir-2KuK0njcwzdAo5TW955E3qwUbP",
        Icon:ngn,
        LastFourDigits:"1234",
        Currency:"NGN",
        Country: "NG",
        Balance: {
            Time: null,
            Money: 0.00,
            Currency: "NGN"
          }, 
        Active:true,
        BankName:"Access Bank",AccountName:"Abraham Adetugboboh",AccountNumber:"98765431234",BankType:"Savings"},
      {
        VirtualAccountIdentifier: "vir-2KuK0njcwrwtBweW955E3qwUbP",
        Icon:usd,
        LastFourDigits:"4567",
        Currency:"USD",
        Country: "US",
        Balance:{
            Time: null,
            Money: 0.00,
            Currency: "USD"
          },
        Active:true,
        BankName:"Evolve Bank & Trust",AccountName:"Abraham Adetugboboh",AccountNumber:"98765434567",BankType:"Checking",RoutingNumber:"111111111",BankAddress:"111 Mason St, San Francisco, CA, 94105,USA" }
    ]) 
    //sdk implementation to load virtual accounts
    loadLinkedAccounts([
      {
        LinkedAccountIdentifier: "lnk-acct-UUtAngJ84ydGtDELvBt3RKuZXKKiSRW",
        Description: "",
        Icon:gtb,
        Country: "NG",
        BankName:"Evolve Bank & Trust",
        Balance: {
          Time: 0,
          Money: 0.00,
          Currency: "NGN"
        },
        Currency: "NGN",
        LastFourDigits: "4949",
        Active:true,
        Date:"28 Aug, 2022"
      }
      ])
    //sdk used for calling list of payments
    loadPayments([
      {
        TransactionDetail: {
          PaymentMade: {
            TransactionDomain: "LOCAL",
            Sender: {
              UserID: "user-NRU9kqPchoLw3tYAEH5bDvg8j",
              FullName: {
                FirstName: "Odeku",
                MiddleName: "James",
                LastName: "Patrick"
              },
              BankName: "Access Bank",
              AccountNumber: "1434282925"
            },
            Recipient: {
              RecipientIdentifier: "rec-WXkVCHLHQtnwKwjyJjUVV3YFuo",
              FullName: {
                FirstName: "Abraham",
                MiddleName: "Demilade",
                LastName: "Adetugboboh"
              },
              Country: "NG",
              Address: {
                StreetAddress: "",
                SecondStreetAddress: "",
                City: "",
                Country: "Nigeria",
                StateOrTerritory: "",
                Zipcode: "",
                LGA: ""
              },
              BankName: "Zenith Bank",
              RoutingNumber: "",
              AccountNumber: ""
            },
            Amount: 1000,
            Fee: 10,
            Description: "Top-up from GTBank",
            Currency:"NGN",
            Image:gtb
          }
        },
        TransactonState: "PENDING",
        TransactionIdentifier: "tra-YptqO8uxHu6qe5WubSHpapsuNp",
        Date: "28 Aug, 2022 03:37:00 PDT",
        TransactionType: "RECIEVE_PAYMENT"
      }
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
                        <Route path='/accounts' element={<Accounts accounts={accounts} linkedAccounts={linkedAccounts} user={user}/>}/>
                        <Route path='/account' element={<Account user={user} transactions={payments}/>}/>
                        <Route path='/payments' element={<Payments user={user} transactions={payments}/>}/>
                        <Route path='/payments/recipients' element={<Recipients user={user} recipients={recipients}/>}/>
                        <Route path='/payments/convert' element={<Convert user={user}/>}/>
                        <Route path='/payments/create' element={<MakePayment user={user} recipients={recipients} accounts={accounts} linkedAccounts={linkedAccounts}/>}/>
                      </Routes>
            </Col>
        </Row>
    </Router>
  </>
)
}



export default App;
