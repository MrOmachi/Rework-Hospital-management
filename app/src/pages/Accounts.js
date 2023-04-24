
import React, { useState, useEffect, useCallback } from "react";
import {Tabs,Tab,Row,Col} from 'react-bootstrap';
import HeadBar from "../components/Headbar";
import AllAccounts from "../components/tabs/AllAccounts";
import LinkedAccounts from "../components/tabs/LinkedAccounts";
import Footer from "../components/Footer";
import "../css/tabs.css";
import NewAccountButton from "../components/buttons/new_account";
import { LinkAcctContext } from "../context/LinkAcctContext";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToken } from '../redux/slices/linkedAccounts/fetchTokenSlice';
import { showError, showSuccess } from "../redux/slices/linkedAccounts/linkedAccountSlice";
import { usePlaidLink } from "react-plaid-link";
import {createLinkedAcct} from "../API"


function Accounts(props) {
    const dispatch = useDispatch();
    const [key, setKey] = useState("accounts");
    useEffect(() => {
        dispatch(fetchToken());
    }, [dispatch]);
    
    const linkToken = useSelector((state) => state.linkedAccount.linkToken);
    const linkAcctErrorMsg = useSelector((state) => state.linkedAccount.linkAcctErrorMsg);
    const linkAcctSuccessMsg = useSelector((state) => state.linkedAccount.linkAcctSuccessMsg);


    const onExit = useCallback((error, metadata) => {
        console.log("metadata = ", metadata);
        dispatch(showError("An error occured, please retry!"));
    
        if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
          dispatch(fetchToken());
        } else {
          console.log("error = ", error);
        }
      }, []);
    
      const onSuccess = async (public_token, metadata) => {
          try {
            const response = await createLinkedAcct(public_token, metadata, "US");
            if(response.status === 200) {
                dispatch(showSuccess("Account linked successfully!"));
            }
            } catch (err) {
                console.log(err.Message.message);
                dispatch(showError(err.Error.Message ||"An error occured, please retry!"));
            }
      };
    
      const config = {
        onSuccess,
        onExit,
        //TODO
        onEvent: (eventName, metadata) => {},
        token: linkToken,
      };
    const { open: openPlaidLink, ready: isPlaidLinkReady } = usePlaidLink(config);
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
