import React from 'react';
import {
Col,Row,Carousel
} from 'react-bootstrap';
import VirtualAccount from '../VirtualAccount';

function AllAccounts(props) {
 
return (
<>
<div className="board">

<div className='slide'>
{props.accounts.map(function(account,key){
                            return(
                                  <VirtualAccount account={account}/>
                             );
                        })}
</div>

{/* <Carousel interval={null} wrap={false} slide={true}>
{props.accounts.map(function(account,key){
                            return(
                                <Carousel.Item key={key} style={{marginBottom:30}}>
                                  <VirtualAccount account={account}/>
                                </Carousel.Item>
                             );
                        })}
</Carousel> */}

{/* <Row>
            {props.accounts.map(function(account,key){
                            return(
                                <Col key={key} xs={12} sm={12} md={6} style={{marginBottom:30}}>
                                    <VirtualAccount account={account}/>
                                </Col>
                             );
                        })}
</Row> */}
</div>
</>
);

  }

export default AllAccounts;
