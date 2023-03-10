
import React, { useState } from "react";
import {Tabs,Tab} from 'react-bootstrap';
import HeadBar from "../components/Headbar";
import AllAccounts from "../components/tabs/AllAccounts";
import LinkedAccounts from "../components/tabs/LinkedAccounts";
import Footer from "../components/Footer";
import "../css/tabs.css";
import NewAccountButton from "../components/buttons/new_account";

function Accounts() {
    const [key, setKey] = useState("accounts");
        return (
            <>  
                        <div md={{paddingTop:10,paddingLeft:80,paddingRight:80}}>
                            <HeadBar title="Accounts"/>

                            <div className="pull-right" style={{padding:25}}>
                                    <NewAccountButton variant="clear"/>
                            </div>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                               
                                    <Tab eventKey="accounts" title="Accounts">
                                        <AllAccounts/>
                                    </Tab>
                                    <Tab eventKey="linked" title="Linked Accounts">
                                        <LinkedAccounts/>
                                    </Tab>
                                    
                            </Tabs>
                            
                        </div>
                        <Footer/>
            </>
        );

}

export default Accounts;
