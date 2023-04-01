
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
import {getVirtualAccount} from "../API";
import { AccountIcon } from "../components/Icon";

function Account(props) {
    const location = useLocation();
    const [account,setAccount]=useState({Balance:{Money:0.00},Currency:"NGN"});

    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var LastFourDigits=function(digits){
        if(digits){
            return digits.substr(-4);
        }
    }

  const loadAccount = async () => {
    var account= await getVirtualAccount(location.state);
    console.log(account.data);
    if(account.data){
        setAccount(account.data);
    }
    }

    var formatAmount=function(number,currency){
           return number.toLocaleString('en-US', { style: 'currency', currency: currency });
    }

  useEffect(() => {
    loadAccount();
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
                            <div style={{margin:10}}>
                                <h3><b>{formatAmount(account.Balance.Money,account.Currency)}</b></h3>
                                <h5>Account **** {LastFourDigits(account.AccountNumber)}</h5>
                            </div>

                            <ButtonGroup className="me-3 text-left" aria-label="Second group">
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
                                      {props.transactions.length > 0 ? props.transactions.filter(function(transaction) {
                                            if(transaction.TransactionDetail.MakePayment){
                                                return transaction.TransactionDetail.MakePayment.Currency === account.Currency;
                                            }
                                            }).length > 0 ? props.transactions.sort(function(a, b) {
                                                      return b.Date - a.Date;
                                          }).map(function(transaction,i){
                                         return (<Card key={i} className="transaction">
                                                      <Card.Body>
                                                      <Image src={transaction.TransactionDetail.MakePayment.Image} width={60} style={{marginRight:30,float:"left"}} height={60} />
                                                      <div>
                                                          <div className="pull-right"><b>{formatAmount(transaction.TransactionDetail.MakePayment.Amount,transaction.TransactionDetail.MakePayment.Currency)}</b></div>
                                                          <b>{transaction.TransactionDetail.MakePayment.Description}</b>
                                                          <h6 className="text-muted">{getDate(transaction.TransactionDetail.MakePayment.Date)}</h6>
                                                      </div>
                                                      </Card.Body>
                                                  </Card>)
                                      }):<div className="padding"><b>No transactions yet.</b></div>
                                      :null} 
                                    <br/>
                                      <br/>
                                      <br/>
                                      <br/>
                                      <br/>
                              </Col>
                              <Col md={6} sm={12}>

                              <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
                                  <Card className="account">
                                       <Card.Body>
                                          <AccountIcon name={account.Currency}/>
                                          <div className="data">
                                              <b>{account.Currency} account</b>
                                              <h6 className="text-muted">**** {LastFourDigits(account.AccountNumber)}</h6>
                                          </div>
                                      </Card.Body>
                                  </Card>
                                  <small>Account Details</small>
                                  <Card style={{width:"100%",float:"left"}}>
                                      <ListGroup className="account_details">
                                          <ListGroup.Item>
                                              Bank <div className="pull-right"><b>{account.BankName}</b></div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account number <div className="pull-right"><b>{account.AccountNumber}</b></div>
                                          </ListGroup.Item>
                                          {account.RoutingNumber ?
                                          <ListGroup.Item>
                                              Routing number <div className="pull-right"><b>{account.RoutingNumber}</b></div>
                                          </ListGroup.Item>:null}
                                          <ListGroup.Item>
                                              Account name <div className="pull-right"><b>{account.AccountName}</b></div>
                                          </ListGroup.Item>
                                          <ListGroup.Item>
                                              Account type <div className="pull-right"><b>{account.BankType}</b></div>
                                          </ListGroup.Item>
                                          {account.BankAddress ?
                                          <ListGroup.Item>
                                              Address <div className="pull-right"><b>{account.BankAddress}</b></div>
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
