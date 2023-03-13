/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import { ListGroup,Modal} from "react-bootstrap";

function paymentSource(props) {
  const [wallets,setWallet] = useState([{
    balance:100000.00,
    ticker:"NGN",
    currency:"NGN",
    last_4_digits:"1234"
},{
  balance:100000.00,
  ticker:"USD",
  currency:"$"
}]);

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>

        <Modal.Body>
        <ListGroup className="account_details">
            <ListGroup.Item>
                <b>Cleva accounts</b>
            </ListGroup.Item>
            {wallets.map(function(wallet,key){
                      return(
                             <ListGroup.Item key={key}>
                                {wallet.ticker} account **** {wallet.last_4_digits} <div className="pull-right">{wallet.balance}</div>
                              </ListGroup.Item>
                            )
            })
          }
        </ListGroup>
        </Modal.Body>

      </Modal.Dialog>
    </div>
  );
}

export default paymentSource;