
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Tabs,Tab,Row,Col} from 'react-bootstrap';
import "../css/details.css";
import TransactionList from "../components/TransactionList";
import MakePayButton from "../components/buttons/make_payment";

function Payments(props) {
    const [key, setKey] = useState("outgoing");
    const [transactions, loadTransactions] = useState([]);

    useEffect(() => {
        //sdk used for calling list of recipients
        loadTransactions([
            {fee:0,recipientName:"Abel Philip",credit:false,amount:7000,currency:"NGN",type:"Bank transfer",description:"Top-up from GTBank",date:"28 Aug, 2022 03:37:00 PDT"}
        ])
      }, []);

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
                                        <TransactionList transactions={transactions.filter(function(transaction) {
                                                    return transaction.credit === false;
                                                    })}/>
                                    </Tab>
                                    <Tab eventKey="incoming" title="Incoming">
                                        <TransactionList transactions={transactions.filter(function(transaction) {
                                                    return transaction.credit === true;
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