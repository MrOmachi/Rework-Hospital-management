import React from 'react';
import {
Col,Row
} from 'react-bootstrap';
import VirtualAccount from '../VirtualAccount';

function AllAccounts(props) {
 
return (
<>
<div className="board">
<Row>
            {props.accounts.map(function(account,key){
                            return(
                                <Col key={key} xs={12} sm={12} md={6} style={{marginBottom:30}}>
                                    <VirtualAccount account={account}/>
                                </Col>
                             );
                        })}
</Row>
</div>
</>
);

  }

export default AllAccounts;
