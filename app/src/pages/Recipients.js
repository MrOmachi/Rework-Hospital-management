
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Table,Row,Col} from 'react-bootstrap';
import "../css/details.css";
import AddRecipientButton from "../components/buttons/add_recipient";

function Recipients(props) {
    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Recipients" user={props.user}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="padding">
                        <div className="pull-right" style={{paddingTop:25,paddingRight:20}}>
                            <AddRecipientButton variant="clear"/>
                        </div>
                    </div>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="board padding">
                        <Table variant="recipient" hover>
                            <thead>
                                <tr>
                                <th colSpan={1}>Recipient</th>
                                <th colSpan={2}>Country</th>
                                <th>Account</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.recipients.map(function(person,key){
                                                        return(
                                    <tr key={key}>
                                        <td colSpan={1}><b>{person.firstName} {person.lastName}</b></td>
                                        <td colSpan={2}><b>{person.country}</b></td>
                                        <td colSpan={3}>Account ending in <b>{person.address}</b></td>
                                        <td></td>
                                    </tr>
                                                        )
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
                </Row>
                <Footer/>
        </>
    );

}

export default Recipients;
