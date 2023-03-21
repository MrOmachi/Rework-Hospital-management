
import React, { useState,useRef,useEffect } from "react";
import { useLocation } from 'react-router-dom';
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Row , Col, Tab ,Tabs} from "react-bootstrap";
import "../css/details.css";
import LocalPayment from "../components/tabs/LocalPayment";
import InternationalPayment from "../components/tabs/InternationalPayment";


function MakePayment(props) {
    const [key, setKey] = useState("local");
    const location = useLocation();
    const prevPathRef = useRef(null);
  
    useEffect(() => {
      prevPathRef.current = location.pathname;
    }, [location]);
   

    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var formatAmount=function(number){
           return number.toLocaleString();
    }

    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Make Payment" user={props.user} history={prevPathRef.current}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="pay-board padding">
                            <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" fill>
                                    <Tab eventKey="local" title="Local Payments">
                                        <LocalPayment/>
                                    </Tab>
                                    <Tab eventKey="international" title="International Payments">
                                        <InternationalPayment/>
                                    </Tab>
                                    
                            </Tabs>
                    </div>
                </Col>
                </Row>
                <Footer/>
        </>
    );

}

export default MakePayment;
