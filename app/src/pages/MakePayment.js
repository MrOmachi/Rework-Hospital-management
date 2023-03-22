
import React, { useState } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Row , Col, Tab ,Tabs,ListGroup} from "react-bootstrap";
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import "../css/details.css";
import LocalPayment from "../components/tabs/LocalPayment";
import InternationalPayment from "../components/tabs/InternationalPayment";
import ListOptions from "../components/popups/ListOptions";


function MakePayment(props) {
    const [key, setKey] = useState("local");
    const [recipient,setRecipient]=useState();
    const [account,setAccount]=useState();

    const [show_recipient,showRecipients]=useState(false);
    const [show_account,showAccounts]=useState(false);


    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var formatAmount=function(number){
           return number.toLocaleString();
    }

    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Make Payment" user={props.user} history="/payments"/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="pay-board padding">
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" fill>
                                    <Tab eventKey="local" title="Local Payments">
                                        <LocalPayment
                                         recipients={props.recipients} 
                                         recipient={recipient}
                                        showRecipients={showRecipients}
                                        accounts={props.accounts} 
                                        account={account}
                                        showAccounts={showAccounts}
                                        />
                                    </Tab>
                                    <Tab eventKey="international" title="International Payments">
                                        <InternationalPayment  
                                        recipients={props.recipients} 
                                        recipient={recipient}
                                       showRecipients={showRecipients}
                                       accounts={props.accounts} 
                                       account={account}
                                       showAccounts={showAccounts}
                                       />
                                    </Tab>
                                    
                            </Tabs>
                    </div>
                </Col>
                </Row>
                <ListOptions 
                    title="Select recipients"
                    show={show_recipient}
                    recipients={props.recipients} 
                    Selection={setRecipient} 
                    ShowOptions={showRecipients}
                    button={<ListGroup.Item as={Link} href="/payments/recipients">
                    <b> <MdPersonAdd/> Add new recipient</b>
                  </ListGroup.Item>}/>
                <ListOptions 
                    title="Select accounts" 
                    show={show_account} 
                    recipients={props.accounts} 
                    Selection={setAccount} 
                    ShowOptions={showAccounts}
                  />
                <Footer/>
        </>
    );

}

export default MakePayment;
