
import React from "react";
import {Card ,ListGroup,Button} from "react-bootstrap";
import "../css/profile.css";
import { FaTimes } from 'react-icons/fa';

function Recipient(props) {


    function close(){
        props.hideProfile(null);
    }

var formatAmount=function(number,currency){
        return number.toLocaleString('en-US', { style: 'currency', currency: currency });
 }
    return(
        <>
        <Card className="profile">
                <div className="pull-right" style={{margin:15,cursor:"pointer"}}>
                <FaTimes size={20} color="black" onClick={close} />
                </div>

                <div className="padding text-center">
                        <h2>{formatAmount(props.profile.TotalTransfers,props.profile.Currency)}</h2>
                        <h6>Transfered in the last 2 week</h6>
                        <a href="/#">View transfers</a>
                </div>
                <ListGroup className="profile-details">
                    <ListGroup.Item>
                        Bank Name <div className="pull-right"><b>{props.profile.BankName}</b></div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Account number <div className="pull-right"><b>{props.profile.AccountNumber}</b></div>
                    </ListGroup.Item>
                    {props.profile.RoutingNumber ?
                    <ListGroup.Item>
                        Routing number <div className="pull-right"><b>{props.profile.RoutingNumber}</b></div>
                    </ListGroup.Item>:null}
                    {props.profile.Address ?
                    <ListGroup.Item>
                        Recipient Address 
                        <div className="pull-right">
                            <b>
                            {props.profile.Address.Zipcode}&nbsp;
                            {props.profile.Address.StreetAddress}&nbsp;
                            {props.profile.Address.City}&nbsp;
                            {props.profile.Address.Country} 
                            </b>
                        </div>
                    </ListGroup.Item>:null}
                </ListGroup>

<Button variant="custard" type="reset">
    Edit
</Button>

<Button variant="custard" className="pull-right">
    Transfer
</Button>
        </Card>
        </>
        );

        }


        export default Recipient;
