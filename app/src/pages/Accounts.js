
import React, { useState, useEffect, useContext } from "react";
import {Tabs,Tab,Row,Col} from 'react-bootstrap';
import HeadBar from "../components/Headbar";
import AllAccounts from "../components/tabs/AllAccounts";
import LinkedAccounts from "../components/tabs/LinkedAccounts";
import Footer from "../components/Footer";
import "../css/tabs.css";
import NewAccountButton from "../components/buttons/new_account";
  import { LinkAcctContext } from "../context/LinkAcctContext";
import { ToastContainer, toast } from 'react-toastify';

function Accounts(props) {
    const [key, setKey] = useState("accounts");
    const {createLinkToken, linkToken, isPlaidLinkReady, openPlaidLink, linkAcctErrorMsg, linkAcctSuccessMsg} = useContext(LinkAcctContext);

    useEffect(() => {
        if (createLinkToken && !linkToken) {
          createLinkToken().catch((err) => console.error(err));
        }
    }, [createLinkToken, linkToken]);

    useEffect(() => {
        if(linkAcctErrorMsg != null){
            toast.error(linkAcctErrorMsg, {toastId: "linkUsAcctErrorMsg"})
        }
    }, [linkAcctErrorMsg])

    useEffect(() => {
        if(linkAcctSuccessMsg != null){
            toast.success(linkAcctSuccessMsg, {toastId: "linkUsAcctSuccessMsg"})
        }
    }, [linkAcctSuccessMsg])
    


  

        return (
            <> 
            <ToastContainer /> 
            <Row>
                <Col md={12} sm={12} lg={12}>
                            <div style={{paddingTop:10}}>
                                <HeadBar title="Accounts"  user={props.user}/>

                            </div>
                </Col>

                <Col md={12} sm={12} lg={12}>
                    <div className="padding">
                                <div className="pull-right" style={{paddingTop:25,paddingRight:20}}>
                                    <NewAccountButton disabled={!isPlaidLinkReady} onClick={()=>openPlaidLink()} variant="clear"/>
                                </div>
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                               
                                    <Tab eventKey="accounts" title="Accounts">
                                        <AllAccounts accounts={props.accounts}/>
                                    </Tab>
                                    <Tab eventKey="linked" title="Linked Accounts">
                                        <LinkedAccounts accounts={props.linkedAccounts} />
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
