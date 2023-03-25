import { useEffect,useState } from 'react';
import {Modal,ListGroup,Button} from 'react-bootstrap';

function Review(props){
  const [recipient,setRecipient]=useState(props.data.recipient);
  const [account,setAccount]=useState(props.data.account);
 

  
      function close(){
        props.close();
      }

      var formatAmount=function(number,currency){
        // if(number && currency){
          return number.toLocaleString('en-US', { style: 'currency', currency: currency });
        // }
      }

      function Transfer(){

      }


return (
<>
<Modal className="modal-review" show={props.show} onHide={close}>

    <Modal.Header closeButton>
      <Modal.Title>
              <b>Review Payment</b>
      </Modal.Title>
    </Modal.Header>

    <div className="cover text-center">
      <h6>Transfer</h6>
      <h2><b>{formatAmount(props.data.amount,account.Currency)}</b></h2>
      <h3>to {recipient ? recipient.FullName.FirstName+" "+recipient.FullName.LastName:null}</h3>
      {props.data.description ? <h6>{props.data.description}</h6>:null}
    </div>

    <Modal.Body>
              <ListGroup className="review-details">
                  <ListGroup.Item>
                      <b>Recipient's bank details</b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                      Bank name <div className="pull-right">{recipient ? recipient.BankName:null}</div>
                  </ListGroup.Item>

                  <ListGroup.Item>
                      Account number <div className="pull-right">{recipient ? recipient.AccountNumber:null}</div>
                  </ListGroup.Item>

                  {recipient.RoutingNumber ?
                  <ListGroup.Item>
                      Routing number <div className="pull-right">{recipient ? recipient.RoutingNumber:null}</div>
                  </ListGroup.Item>:null}

                  <ListGroup.Item>
                      Account type <div className="pull-right">{recipient ?recipient.BankType:null}</div>
                  </ListGroup.Item>

                  {recipient.Address ?
                  <ListGroup.Item>
                      Address <div className="pull-right">
                            {recipient.Address.Zipcode}&nbsp;
                            {recipient.Address.StreetAddress}&nbsp;
                            {recipient.Address.City}&nbsp;
                            {recipient.Address.Country}
                      </div>
                  </ListGroup.Item>:null}
              </ListGroup>

              <br/>
              <ListGroup className="review-details">
                  <ListGroup.Item>
                      <b>Transfer from:</b> <div className="pull-right">{account ? account.BankName:null} account **** {account ? account.LastFourDigits:null}</div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Amount to transfer <div className="pull-right">{formatAmount(props.data.amount,account.Currency)}</div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     Recipient receives <div className="pull-right">{formatAmount(props.data.finalAmount,recipient.Currency)}</div>
                  </ListGroup.Item>
                  {props.data.conversionFee ?
                  <ListGroup.Item>
                    Conversion fee <div className="pull-right">{formatAmount(props.data.conversionFee,account.Currency)}</div>
                  </ListGroup.Item>:null}
                  {props.data.fee ?
                  <ListGroup.Item>
                     Transfer fee <div className="pull-right">{formatAmount(props.data.fee,account.Currency)}</div>
                  </ListGroup.Item>:null}
                  <ListGroup.Item>
                    Total amount to debit from account <div className="pull-right">{formatAmount(props.data.total,account.Currency)}</div>
                  </ListGroup.Item>
              </ListGroup>
                    <br/>
            <Button variant="custard" className="pull-left" onClick={close}>
              Cancel
            </Button>

            <Button variant="custard" className="pull-right" onClick={Transfer}>
              Transfer
            </Button>     
    </Modal.Body>

    <Modal.Footer>
    </Modal.Footer>
</Modal>
</>
)
}

export default Review;

