
import React, { useState,useEffect} from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import { ButtonGroup,Row , Col, Card ,ListGroup,Image} from "react-bootstrap";
import "../css/details.css";
import TopupButton from "../components/buttons/topup";
import MakePayButton from "../components/buttons/make_payment";
import ConvertButton from "../components/buttons/convert";
import RequestPayButton from "../components/buttons/request_payment";
import {useLocation} from 'react-router-dom';

function Account(props) {
    const location = useLocation();
    const [account,setAccount]=useState({balance:100000.00,currency:"NGN"});

    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var formatAmount=function(number,currency){
           return number.toLocaleString('en-US', { style: 'currency', currency: currency });
    }


  useEffect(() => {
    console.log("account:");
    console.log(location);
    if(location.state){
        setAccount(location.state);
    }
    //sdk implimentation for fetching list of transactions under this virtual account
  }, []);


        return (
            <>  
            <Row>
                <Col md={12} sm={12} lg={12}>
                    <div style={{paddingTop:10}}>
                      <HeadBar title="Account Details" user={props.user} backButton={true}/>
                    </div>
                </Col>

                <Col md={12} sm={12} lg={12}>
                <div className="padding details">
                            <div>
                                <h2>{formatAmount(account.balance,account.currency)}</h2>
                                <h5>Account **** {account.last4Digits}</h5>
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
                                      {props.transactions.filter(function(transaction) {
                                            return transaction.currency === account.currency;
                                            }).length > 0 ? props.transactions.filter(function(transaction) {
                                            return transaction.currency === account.currency;
                                            }).sort(function(a, b) {
                                                      return b.date - a.date;
                                          }).map(function(transaction,i){
                                         return (<Card key={i} className="transaction">
                                                      <Card.Body>
                                                      <Image src={transaction.image} width={60} style={{marginRight:30,float:"left"}} height={60} />
                                                      <div>
                                                          <div className="pull-right"><b>{formatAmount(transaction.amount,transaction.currency)}</b></div>
                                                          <b>{transaction.description}</b>
                                                          <h6 className="text-muted">{getDate(transaction.date)}</h6>
                                                      </div>
                                                      </Card.Body>
                                                  </Card>)
                                      }):<b>No transactions yet</b>
                                      }
                              </Col>
                              <Col md={6} sm={12}>

                              <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
                                  <Card className="account">
                                       <Card.Body>
                                          <Image src={account.icon} roundedCircle width={60} style={{marginRight:30,float:"left"}} height={60} />
                                          <div className="data">
                                              <b>{account.Name} account</b>
                                              <h6 className="text-muted">**** {account.last4Digits}</h6>
                                          </div>
                                      </Card.Body>
                                  </Card>
                                  <small>Account Details</small>
                                  <Card style={{width:"100%",float:"left"}}>
                                      <ListGroup className="account_details">
                                          <ListGroup.Item>
                                              Bank <div className="pull-right">{account.bankName}</div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account number <div className="pull-right">{account.accountNumber}</div>
                                          </ListGroup.Item>
                                          {account.routingNumber ?
                                          <ListGroup.Item>
                                              Routing number <div className="pull-right">{account.routingNumber}</div>
                                          </ListGroup.Item>:null}
                                          <ListGroup.Item>
                                              Account name <div className="pull-right">{account.accountName}</div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account type <div className="pull-right">{account.type}</div>
                                          </ListGroup.Item>
                                          {account.bankAddress ?
                                          <ListGroup.Item>
                                              Address <div className="pull-right">{account.bankAddress}</div>
                                          </ListGroup.Item>:null}
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
