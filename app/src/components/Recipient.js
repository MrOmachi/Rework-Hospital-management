
import React,{useState,useEffect} from "react";
import {ListGroup,Button} from "react-bootstrap";
import "../css/profile.css";
import { FaTimes } from 'react-icons/fa';
import {getRecipient} from "../API";

function Recipient(props) {

    const [recipient,setRecipient]=useState({});

    function close(){
        props.hideProfile(null);
    }



  const loadRecipient = async () => {
    var person= await getRecipient(props.id);
    setRecipient(person.data);
    }

    useEffect(() => {
        loadRecipient();
      }, [props.id]);

      
    return(
        <>
        <div className="profile">
                <div className="pull-right" style={{margin:15,cursor:"pointer"}}>
                <FaTimes size={20} color="black" onClick={close} />
                </div>

                <div className="padding text-center">
                        <h2>{recipient.FullName}</h2>
                        <a href="/#">View transfers</a>
                </div>
                <ListGroup className="profile-details">
                    <ListGroup.Item>
                        Bank Name <div className="pull-right"><b>{recipient.BankName}</b></div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Account number <div className="pull-right"><b>{recipient.AccountNumber}</b></div>
                    </ListGroup.Item>
                    {recipient.RoutingNumber ?
                    <ListGroup.Item>
                        Routing number <div className="pull-right"><b>{recipient.RoutingNumber}</b></div>
                    </ListGroup.Item>:null}
                    {recipient.Address ?
                    <ListGroup.Item>
                        Recipient Address 
                        <div className="pull-right">
                            <b>
                            {recipient.Address.Zipcode}&nbsp;
                            {recipient.Address.StreetAddress}&nbsp;
                            {recipient.Address.City}&nbsp;
                            {recipient.Address.Country} 
                            </b>
                        </div>
                    </ListGroup.Item>:null}
                </ListGroup>
                <div className="padding text-center">
                    <Button variant="custard" className="pull-right">
                        Transfer
                    </Button>
                    <Button variant="custard" className="pull-left">
                        Edit
                    </Button>
                </div>
        </div>
        </>
        );

        }


        export default Recipient;
