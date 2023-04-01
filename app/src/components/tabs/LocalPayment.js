import React,{useEffect, useState} from 'react';
import {Form, Button, Row,Col,Image,InputGroup,FormControl} from 'react-bootstrap';
import { CountryIcon } from '../Icon';

function LocalPayment(props) {
  const [amount, setAmount] = useState("0");
  const [finalAmount, setFinalAmount] = useState(0);
  const [fee, setFee] = useState(0);
  const [description, setDescription] = useState("");

  function openRecipients(c){
    props.showRecipients(c);
  }
  function openAccounts(c){
    props.showAccounts(c);
  }



  const inputAmount= (value) => {
    const rawValue = value.replace(/,/g, ""); // Remove existing commas
    const formattedValue = Number(rawValue).toLocaleString(); // Add commas to the new value
    setAmount(formattedValue);
  };


  var formatAmount=function(number,currency){
      return number.toLocaleString('en-US', { style: 'currency', currency: currency });
}


  function reviewPayment(){
    var f=0;
    if(fee){
      f=parseFloat(fee.replace(",", ""));
    }
    var amt=parseFloat(amount.replace(/,/g, ""));
    var finalamt=parseFloat(finalAmount.replace(/,/g, ""));
    var Total = amt +fee;
    props.review({
      recipient: props.recipient,
      account:props.account,
      amount:amt,
      finalAmount:finalamt,
      fee: f,
      description:description,
      total:Total || 0
  });
   }


useEffect(() => {
    setFinalAmount(amount)
}, [amount]);

return (
<>
<Form className="pay-form">

<Form.Group className="mb-3" onClick={e=>openRecipients(true)}>
      <Form.Label>Recipient</Form.Label>
      <InputGroup> 
      <Form.Select disabled value={props.recipient.RecipientIdentifier}>
          <option>Select recipient</option>
            {props.recipients ? props.recipients.map(function(rep,key){
            return(
                    <option value={rep.RecipientIdentifier} key={key}>{rep.FullName}</option>
                    )
                })
            :null}
      </Form.Select>
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
         {props.recipient.Country} &nbsp;&nbsp; <CountryIcon name={props.recipient.Country}/>
      </InputGroup.Text>
      </InputGroup>
</Form.Group>


<Form.Group className="mb-3" onClick={e=>openAccounts(true)}>
      <Form.Label>Pay from</Form.Label>
      <Form.Select disabled value={props.account.VirtualAccountIdentifier || props.account.LinkedAccountIdentifier}>
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

    <InputGroup>
      <Form.Control value={amount} onChange={e => inputAmount(e.target.value)} placeholder="Enter amount you want to send" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
         {props.account.Currency} &nbsp;&nbsp; <CountryIcon name={props.account.Country}/>
      </InputGroup.Text>
      </InputGroup>
</Form.Group>

  <br/>

<Form.Group className="mb-3 recipient-control" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <InputGroup>
      <Form.Control disabled value={finalAmount} placeholder="0.00" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
         {props.recipient.Country} &nbsp;&nbsp; <CountryIcon name={props.recipient.Country}/>
      </InputGroup.Text>
      </InputGroup>
</Form.Group>
<fieldset>
  <Form.Group as={Row} className="mb-3">
    <Col sm={12} md={6}>
      <b className='pull-right'>{formatAmount(fee,props.account.Currency)}</b>
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
  <Form.Control placeholder="Enter Description" value={description} onChange={e => setDescription(e.target.value)} />
</Form.Group>
<br/>

<Button variant="custard" disabled={!props.account || !props.recipient} onClick={e=>window.history.back()}>
Cancel
</Button>

<Button variant="custard" className="pull-right" disabled={!amount || !props.account || !props.recipient} onClick={reviewPayment}>
Continue
</Button>
</Form>


</>
)
}


export default LocalPayment;
