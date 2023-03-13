
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeadBar from "../components/Headbar";
import { Row,Col } from "react-bootstrap";
function Home(props) {     
        return (
            <>
                        
                    <Row>

                    <Col md={12} sm={12} lg={12}>
                        <HeadBar title="Home" user={props.user}/>
                    </Col>
                    <Col md={12} sm={12} lg={12}>
                        <div className="board padding">
                                
                        </div>
                    </Col>
                    </Row>
                    <Footer/>
            </>
        );
}

export default Home;
