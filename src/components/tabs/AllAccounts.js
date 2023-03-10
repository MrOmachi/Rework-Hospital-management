import React from 'react';
import {
Col,Row
} from 'react-bootstrap';
import Wallet from '../Wallet';
import ngn from "../../images/flags/ngn.png";
import usd from "../../images/flags/usd.png";

function AllAccounts(props) {
 
return (
<>
<Row>
            {/* {props.items.map(function(item,key){
                            return( */}
                                <Col xs={12} sm={12} md={6} style={{marginBottom:30}}>
                                    <Wallet ticker="NGN" icon={ngn} address="**** **** **** 1234" balance="N0.00" active={false}/>
                                </Col>
                                <Col xs={12} sm={12} md={6} style={{marginBottom:30}}>
                                    <Wallet ticker="USD" icon={usd} address="**** **** **** 4567" balance="$0.00" active={true}/>
                                </Col>
                            {/* );
                        })} */}
</Row>
</>
);

  }

export default AllAccounts;
