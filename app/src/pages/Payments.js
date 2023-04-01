
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Tabs,Tab,Row,Col} from 'react-bootstrap';
import "../css/details.css";
import TransactionList from "../components/TransactionList";
import MakePayButton from "../components/buttons/make_payment";

function Payments(props) {
    const [key, setKey] = useState("outgoing");

    console.log("props.transaction:");
    console.log(props.transactions);
    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Payments" user={props.user}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                <div className="padding">
                                <div className="pull-right" style={{paddingTop:25,paddingRight:20}}>
                                    <MakePayButton variant="clear"/>
                                </div>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                                    <Tab eventKey="outgoing" title="Outgoing">
                                        <TransactionList transactions={props.transactions.filter(function(transaction) {
                                                    return transaction.TransactionType === "SEND_PAYMENT";
                                                    })}/>
                                    </Tab>
                                    <Tab eventKey="incoming" title="Incoming">
                                        <TransactionList transactions={props.transactions.filter(function(transaction) {
                                                    return transaction.TransactionType === "RECIEVE_PAYMENT" || transaction.TransactionType === "TOP_UP";
                                                    })}/>
                                    </Tab>
                                    
                            </Tabs>
                    </div>
                </Col>
                </Row>
                <Footer/>
        </>
    );

}

export default Payments;
