import React,{useEffect, useState} from 'react';
import {Form, Button, Row,Col,Image} from 'react-bootstrap';

function LocalPayment(props) {
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState({});
  const [recipient, setRecipient] = useState({});
  const [finalAmount, setFinalAmount] = useState(0);
  const [fee, setFee] = useState(0);
  const [description, setDescription] = useState("");

  function openRecipients(c){
    props.showRecipients(c);
  }
  function openAccounts(c){
    props.showAccounts(c);
  }
 function MakePayment(e){
  e.preventDefault();
    props.Pay({
      Country: recipient.Country,
      BankName:account.BankName,
      RoutingNumber:account.RoutingNumber,
      AccountNumber: account.AccountNumber,
      Amount: amount,
      Fee: fee,
      Description:description
  });
 }

 useEffect(() => {
  setFee(amount*0.10);
  //sdk implementation for making calculating fee
}, [amount]);

return (
<>
<Form className="pay-form" onSubmit={MakePayment}>

<Form.Group className="mb-3" onClick={e=>openRecipients(true)}>
      <Form.Label>Recipient</Form.Label>
      <Form.Select disabled onChange={e => setRecipient(e.target.value)} value={props.recipient.RecipientIdentifier}>
          <option>Select recipient</option>
            {props.recipients ? props.recipients.map(function(rep,key){
            return(
                    <option value={rep.RecipientIdentifier} key={key}>{rep.FullName.FirstName} {rep.FullName.LastName}</option>
                    )
                })
            :null}
      </Form.Select>
      {props.recipient.Country ?
      <div style={{margin:10}}>
        {props.recipient.Country} 
        <div className="pull-right">
          <Image src={props.recipient.CountryIcon} roundedCircle width={20} style={{float:"right"}} height={20} />
        </div>
      </div>:null}
</Form.Group>


<Form.Group className="mb-3" onClick={e=>openAccounts(true)}>
      <Form.Label>Pay from</Form.Label>
      <Form.Select disabled onChange={e => setAccount(e.target.value)} value={props.account.VirtualAccountIdentifier || props.account.LinkedAccountIdentifier}>
          <option>Select payment account</option>
            {props.accounts ? props.accounts.map(function(rep,key){
            return(
                    <option value={rep.VirtualAccountIdentifier || rep.LinkedAccountIdentifier} key={key}>{rep.Currency} account **** {rep.LastFourDigits}</option>
                    )
                })
            :null}
      </Form.Select>
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>You will send</Form.Label>
      <Form.Control type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount you want to send" />
</Form.Group>

  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <Form.Control disabled value={finalAmount} onChange={e => setFinalAmount(e.target.value)} placeholder="0.00" />
</Form.Group>

<br/>
<fieldset>
  <Form.Group as={Row} className="mb-3">
    <Col sm={12} md={6}>
      <b className='pull-right'>{fee} {props.account.Currency ? props.account.Currency:"NGN"}</b>
      <Form.Check style={{marginLeft:30}}
        type="radio"
        label="Transfer fee"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      /> 
    </Col>
  </Form.Group>
</fieldset>
  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Description</Form.Label>
  <Form.Control placeholder="" value={description} onChange={e => setDescription(e.target.value)} />
</Form.Group>
<br/>

<Button variant="custard" type="reset">
Cancel
</Button>

<Button variant="custard" className="pull-right" type="submit">
Continue
</Button>
</Form>


</>
)
}


export default LocalPayment;
