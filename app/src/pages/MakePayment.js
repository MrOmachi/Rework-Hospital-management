
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Row , Col, Tab ,Tabs} from "react-bootstrap";
import "../css/details.css";
import LocalPayment from "../components/tabs/LocalPayment";
import InternationalPayment from "../components/tabs/InternationalPayment";
import ListOptions from "../components/popups/ListOptions";
import AddRecipientButton from "../components/buttons/add_recipient";


function MakePayment(props) {
    const [key, setKey] = useState("local");
    const [recipient,setRecipient]=useState({});
    const [account,setAccount]=useState({});

    const [show_recipient,showRecipients]=useState(false);
    const [show_account,showAccounts]=useState(false);


    function Pay(data){
       var data= {
        Country: data.Country,
        BankName:data.BankName,
        RoutingNumber: data.RoutingNumber,
        AccountNumber: data.AccountNumber,
        Amount: data.Amount,
        Fee: data.Fee,
        Description: data.Description
    }
    //create transaction sdk implementation
}



useEffect(() => {
        if(account.Country!==recipient.Country){
            console.log("same!");
            setKey("international");
        }else{
            setKey("local");
        }
  }, [account,recipient]);



    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Make Payment" user={props.user} backButton={true}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="pay-board padding">
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" fill>
                                    <Tab disabled={account.Country!==recipient.Country} eventKey="local" title="Local Payments">
                                        <LocalPayment Pay={Pay}
                                         recipients={props.recipients} 
                                         recipient={recipient}
                                        showRecipients={showRecipients}
                                        accounts={props.accounts} 
                                        account={account}
                                        showAccounts={showAccounts}
                                        />
                                    </Tab>
                                    <Tab disabled={account.Country===recipient.Country} eventKey="international" title="International Payments">
                                        <InternationalPayment Pay={Pay}
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
                    options={props.recipients.map(item => ({
                        ...item,
                        Name:item.FullName.FirstName+" "+item.FullName.LastName,
                        Icon: item.CountryIcon
                      }))} 
                    Selection={setRecipient} 
                    ShowOptions={showRecipients}
                    button={<AddRecipientButton />}/>
                <ListOptions 
                    title="Select accounts" 
                    show={show_account} 
                    options={props.accounts.map(item => ({
                        ...item,
                        Name:item.Currency
                      }))} 
                    Selection={setAccount} 
                    ShowOptions={showAccounts}
                  />
                <Footer/>
        </>
    );

}

export default MakePayment;
