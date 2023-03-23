import React from 'react';
import "../../css/info.css";
import Info from '../Info';
import image from "../../images/doodles/link.png";
import { Image,Row,Col,Badge,Button } from 'react-bootstrap';
import NewAccountButton from "../buttons/new_account";

function LinkedAccounts(props) {
 
return (
<>
<div className="board">
{props.accounts ? props.accounts.map(function(account,key){
                          return(
                            <div key={key} className="cleva-item">
                              <Row>
                                <Col md={4}>
                                <Image src={account.icon} width={60} style={{marginRight:30,float:"left"}} height={60} />
                                <div>
                                    <b>**** **** **** {account.last4Digits}</b>
                                    <h6 className="text-muted">Account number</h6>
                                </div>
                                </Col> 
                                <Col>
                                  <div>
                                    <b>{account.currency}</b>
                                    <h6 className="text-muted">Currency</h6>
                                  </div>
                                </Col>


                                <Col>
                                  <div>
                                    <b>{account.date}</b>
                                    <h6 className="text-muted">Linked date</h6>
                                  </div>
                                </Col>


                                <Col>
                                  <br/>
                                  <Badge bg={account.active ? "primary":"danger"}>
                                  {account.active ? "Active":"Inactive"}
                                  </Badge>
                                </Col>


                                <Col>
                                  <Button variant="custard" className="pull-right" type="submit">
                                    unlink
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          )
                        })
                        :
                    <Info 
                      image={<Image src={image} width={250} />}
                      title="Link a new account"
                      body="Connect your existing bank account to Cleva to enable easy transfers into your Cleva account"
                      button={<NewAccountButton variant="link"/>}/>
                      }
</div>
</>
);

  }

export default LinkedAccounts;
