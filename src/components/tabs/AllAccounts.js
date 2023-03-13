import React from 'react';
import {
Col,Row
} from 'react-bootstrap';
import Wallet from '../Wallet';

function AllAccounts(props) {
 
return (
<>
<div className="board">
<Row>
            {props.wallets.map(function(wallet,key){
                            return(
                                <Col key={key} xs={12} sm={12} md={6} style={{marginBottom:30}}>
                                    <Wallet ticker={wallet.ticker} icon={wallet.icon} address={wallet.address} currency={wallet.currency} balance={wallet.balance} active={wallet.active}/>
                                </Col>
                             );
                        })}
</Row>
</div>
</>
);

  }

export default AllAccounts;
