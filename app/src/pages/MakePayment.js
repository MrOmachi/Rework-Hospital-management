
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Row , Col, Tab ,Tabs} from "react-bootstrap";
import "../css/details.css";
import LocalPayment from "../components/tabs/LocalPayment";
import InternationalPayment from "../components/tabs/InternationalPayment";
import ListOptions from "../components/popups/ListOptions";
import Review from "../components/popups/Review";
import AddRecipientButton from "../components/buttons/add_recipient";


function MakePayment(props) {
    const [key, setKey] = useState("local");
    const [show_review, showReview] = useState(false);
    const [recipient,setRecipient]=useState({FullName:{},Address:{}});
    const [account,setAccount]=useState({Currency:"NGN"});
    const [previewData,setData]=useState();

    const [show_recipient,showRecipients]=useState(false);
    const [show_account,showAccounts]=useState(false);


    function review(data){
        setData(data);
        showReview(true);
}

function closeReview(){
    showReview(false);
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
                                        <LocalPayment review={review}
                                         recipients={props.recipients} 
                                         recipient={recipient}
                                        showRecipients={showRecipients}
                                        accounts={props.accounts} 
                                        account={account}
                                        showAccounts={showAccounts}
                                        />
                                    </Tab>
                                    <Tab disabled={account.Country===recipient.Country} eventKey="international" title="International Payments">
                                        <InternationalPayment review={review}
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
                    button={<AddRecipientButton variant="clear" />}/>
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
                  {show_review && (<Review 
                                    show={show_review} 
                                    data={previewData}
                                    close={closeReview}
                                    />)}
                <Footer/>
        </>
    );

}

export default MakePayment;
