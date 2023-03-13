
import React, { useState } from "react";
import {Tabs,Tab,Row,Col} from 'react-bootstrap';
import HeadBar from "../components/Headbar";
import AllAccounts from "../components/tabs/AllAccounts";
import LinkedAccounts from "../components/tabs/LinkedAccounts";
import Footer from "../components/Footer";
import "../css/tabs.css";
import NewAccountButton from "../components/buttons/new_account";

function Accounts(props) {
    const [key, setKey] = useState("accounts");
        return (
            <>  
            <Row>
                <Col md={12} sm={12} lg={12}>
                            <div style={{paddingTop:10}}>
                                <HeadBar title="Accounts"  user={props.user}/>

                            </div>
                </Col>

                <Col md={12} sm={12} lg={12}>
                    <div className="padding">
                                <div className="pull-right" style={{paddingTop:25,paddingRight:20}}>
                                    <NewAccountButton variant="clear"/>
                                </div>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                               
                                    <Tab eventKey="accounts" title="Accounts">
                                        <AllAccounts wallets={props.wallets}/>
                                    </Tab>
                                    <Tab eventKey="linked" title="Linked Accounts">
                                        <LinkedAccounts/>
                                    </Tab>
                                    
                            </Tabs>
                    </div>
                </Col>
            </Row>
            <Footer/>
            </>
        );

}

export default Accounts;
