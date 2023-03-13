
import React, { useState } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import { ButtonGroup,Row , Col, Card ,ListGroup,Image} from "react-bootstrap";
import "../css/details.css";
import TopupButton from "../components/buttons/topup";
import MakePayButton from "../components/buttons/make_payment";
import ConvertButton from "../components/buttons/convert";
import RequestPayButton from "../components/buttons/request_payment";
import ngn from "../images/flags/ngn.png";
import gtb from "../images/banks/gtb.png";

function Account(props) {

    const [wallet,setWallet]=useState({
        icon:ngn,
        balance:100000.00,
        ticker:"NGN",
        currency:"NGN",
        last_4_digits:"1234",
        bank_name:"Access Bank",
        account_number:"98765431234",
        account_name:"Tolu Test & Co.",
        account_type:"Checking"
    });

    const [transactions,loadTransactions]=useState([
        {image:gtb,amount:100000,currency:"NGN",description:"Top-up from GTBank",date:"28 Aug, 2022 02:15:00 PDT"},
        {image:gtb,amount:5000,currency:"NGN",description:"Top-up from GTBank",date:"28 Aug, 2022 02:44:00 PDT"},
        {image:gtb,amount:7000,currency:"NGN",description:"Top-up from GTBank",date:"28 Aug, 2022 03:37:00 PDT"}
    ]);

    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var formatAmount=function(number,currency){
           return number.toLocaleString('en-US', { style: 'currency', currency: currency });
    }


        return (
            <>  
            <Row>
                <Col md={12} sm={12} lg={12}>
                    <div style={{paddingTop:10}}>
                      <HeadBar title="Account Details" user={props.user} history="/accounts"/>
                    </div>
                </Col>

                <Col md={12} sm={12} lg={12}>
                <div className="padding details">
                            <div>
                                <h2>{formatAmount(wallet.balance,wallet.currency)}</h2>
                                <h5>Account **** {wallet.last_4_digits}</h5>
                            </div>

                            <ButtonGroup className="me-2" aria-label="Second group">
                                <TopupButton variant="clear"/>
                                <MakePayButton variant="clear"/>
                                <ConvertButton variant="clear"/>
                                <RequestPayButton variant="clear"/>
                            </ButtonGroup>
                </div>
                </Col>
                          <hr/>
                <Col md={12} sm={12} lg={12}>
                       
                        <div className="board padding">
                            <br/>
                          <Row>
                              <Col md={6} sm={12}>
                                      {transactions.sort(function(a, b) {
                                                      return b.date - a.date;
                                          }).map(function(transaction,i){
                                         return (<Card className="transaction">
                                                      <Card.Body>
                                                      <Image src={transaction.image} width={60} style={{marginRight:30,float:"left"}} height={60} />
                                                      <div>
                                                          <div className="pull-right"><b>{formatAmount(transaction.amount,transaction.currency)}</b></div>
                                                          <b>{transaction.description}</b>
                                                          <h6 className="text-muted">{getDate(transaction.date)}</h6>
                                                      </div>
                                                      </Card.Body>
                                                  </Card>)
                                      })
                                      }
                              </Col>
                              <Col md={6} sm={12}>

                              <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
                                  <Card className="account">
                                       <Card.Body>
                                          <Image src={wallet.icon} roundedCircle width={60} style={{marginRight:30,float:"left"}} height={60} />
                                          <div className="data">
                                              <b>{wallet.ticker} account</b>
                                              <h6 className="text-muted">**** {wallet.last_4_digits}</h6>
                                          </div>
                                      </Card.Body>
                                  </Card>
                                  <small>Account Details</small>
                                  <Card style={{width:"100%",float:"left"}}>
                                      <ListGroup className="account_details">
                                          <ListGroup.Item>
                                              Bank <div className="pull-right">{wallet.bank_name}</div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account number <div className="pull-right">{wallet.account_number}</div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account name <div className="pull-right">{wallet.account_name}</div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account type <div className="pull-right">{wallet.account_type}</div>
                                          </ListGroup.Item>
                                      </ListGroup>
                                  </Card>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                </Col>
                <Footer/>
            </Row>
                        
            </>
        );

}

export default Account;
