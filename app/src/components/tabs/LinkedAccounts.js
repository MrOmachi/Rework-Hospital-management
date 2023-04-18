import React from 'react';
import "../../css/info.css";
import Info from '../Info';
import image from "../../images/doodles/link.png";
import { Image,Row,Col,Badge } from 'react-bootstrap';
import NewAccountButton from "../buttons/new_account";
import UnlinkButton from '../buttons/UnlinkAccount';
import { LinkedIcon } from "../Icon";

function LinkedAccounts(props) {
  var getDate=function(date){
    const now = new Date(date);
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const dateString = now.toLocaleDateString();
    return `${dateString}`;
  }


return (
<>
<div className="board">
{props.accounts.length > 0 ? props.accounts.map(function(account,key){
                          return(
                            <div key={key} className="cleva-item">
                              <Row>
                                <Col sm={6} md={3}>
                                <LinkedIcon name={account.Currency}/>
                                <div>
                                    <b>**** **** **** {account.LastFourDigits}</b>
                                    <h6 className="text-muted">Account number</h6>
                                </div>
                                </Col> 

                                
                                <Col sm={6} md={2} lg={2}>
                                  <div>
                                    <b>{account.Currency}</b>
                                    <h6 className="text-muted">Currency</h6>
                                  </div>
                                </Col>


                                <Col sm={12} md={true}>
                                  <div>
                                    <b>{getDate(account.Date)}</b>
                                    <h6 className="text-muted">Linked date</h6>
                                  </div>
                                </Col>


                                <Col>
                                  <Badge bg={account.Active ? "success":"danger"}>
                                  {account.Active ? "Active":"Inactive"}
                                  </Badge>
                                </Col>


                                <Col sm={12} md={true}>
                                  <UnlinkButton LinkedAccountIdentifier={account.LinkedAccountIdentifier}/>
                                </Col>
                              </Row>
                            </div>
                          )
                        })
                        :
                    <Info 
                      image={<Image src={image} width={150} />}
                      title="Link a new account"
                      body="Connect your existing bank account to Cleva to enable easy transfers into your Cleva account"
                      button={<NewAccountButton variant="link"/>}/>
                      }
</div>
</>
);

  }

export default LinkedAccounts;
