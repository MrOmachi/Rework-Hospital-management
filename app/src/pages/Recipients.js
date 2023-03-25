
import React, { useState,useEffect } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Table,Row,Col} from 'react-bootstrap';
import "../css/details.css";
import AddRecipientButton from "../components/buttons/add_recipient";
import Recipient from "../components/Recipient";
import { FaEllipsisH } from "react-icons/fa";

function Recipients(props) {
    const [profile, setProfile]=useState();

    function more(){
        //more options
    }

    return (
        <>         
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Recipients" user={props.user}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="sub-head padding">
                        <div className="pull-right" style={{paddingRight:20}}>
                            <AddRecipientButton variant="clear"/>
                        </div>
                        <h6 style={{paddingTop:30,float:"left"}}><b>All recipients</b></h6>
                    </div>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="board padding">
                    <Row>
                        <Col xs={{span:12,order:2}} md={{span:(profile ? 5:12),order:1}}>
                        <Table variant="recipient" hover>
                            <thead>
                                <tr>
                                <th colSpan={1}>Recipient</th>
                                <th colSpan={2}>Country</th>
                                {profile ? null:<th className={profile ? "hidden":null}>Account</th>}
                                {profile ? null:<th></th>}
                                </tr>
                            </thead>
                            <tbody>
                                {props.recipients.map(function(person,key){
                                                        return(
                                    <tr key={key} onClick={e=>setProfile(person)}>
                                        <td colSpan={1}><b>{person.FullName.FirstName+" "+person.FullName.LastName}</b></td>
                                        <td colSpan={2}><b>{person.Country}</b></td>
                                        {profile ? null:<td colSpan={3}>Account ending in <b>**** {person.LastFourDigits}</b></td>}
                                        {profile ? null: <td><FaEllipsisH size={20} color="black" onClick={more} /></td>}
                                    </tr>
                                                        )
                                })
                                }
                            </tbody>
                        </Table>
                        </Col>
                        <Col className={profile ? "padding":"hidden"} xs={{span:12,order:1}} md={{span:(profile ? 7:12),order:2}}>
                               {profile ? <Recipient profile={profile} hideProfile={setProfile}/>:null}
                        </Col>
                    </Row>
                    </div>
                </Col>


                </Row>
                <Footer/>
        </>
    );

}

export default Recipients;
