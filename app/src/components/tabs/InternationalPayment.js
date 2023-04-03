import React,{useState,useEffect} from 'react';
import {Form, Button,Row,Col,InputGroup,FormControl} from 'react-bootstrap';
import { CountryIcon } from '../Icon';

function InternationalPayment(props) {
 
  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [fee, setFee] = useState(0);
  const [conversion_fee, setConversionFee] = useState(0);
  const [description, setDescription] = useState("");

  const inputAmount= (value) => {
    const rawValue = value.replace(/,/g, ""); // Remove existing commas
    const formattedValue = Number(rawValue).toLocaleString(); // Add commas to the new value
    setAmount(formattedValue);
  };

  function openRecipients(c){
    props.showRecipients(c);
  }

  function openAccounts(c){
    props.showAccounts(c);
  }


  var formatAmount=function(number,currency){
      return number.toLocaleString('en-US', { style: 'currency', currency: currency });
  }

 function reviewPayment(){
  var Total=parseFloat(amount) + parseFloat(fee) + parseFloat(conversion_fee);

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
    amount: amt,
    finalAmount:finalamt,
    fee: f,
    rate:props.rate,
    conversionFee: conversion_fee,
    description:description,
    total: Total || 0
});
 }



useEffect(() => {
  if(amount){
  var amt=parseFloat(amount.replace(/,/g, ""));
    var rate=props.rate.ToCurrencyRate;
    var recieve=rate*amt;
    if(props.account.Country==="Nigeria" || props.account.Country==="NG" || props.account.Country==="nigeria"){
     recieve= amt/rate;
     console.log(recieve);
    }
    if(recieve){
    const formattedValue = Number(recieve).toLocaleString(); // Add commas to the new value
      setFinalAmount(formattedValue);
    }
  }
}, [amount]);




useEffect(() => {
  setFinalAmount(0);
  setAmount(0);
}, []);


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
                    <option value={rep.RecipientIdentifier} key={key}>{rep.FullName.FirstName} {rep.FullName.LastName}</option>
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
            {props.linkedAccounts ? props.linkedAccounts.map(function(rep,key){
           return(
                   <option value={rep.VirtualAccountIdentifier || rep.LinkedAccountIdentifier} key={key}>{rep.Currency} account **** {rep.LastFourDigits}</option>
                   )
               })
           :null}
      </Form.Select>
</Form.Group>

  <br/>

  <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>You will send</Form.Label>

    <InputGroup>
      <FormControl value={amount} onChange={e => inputAmount(e.target.value)} placeholder="Enter amount you want to send" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
          {props.account.Currency} &nbsp;&nbsp; <CountryIcon name={props.account.Country}/>
       </InputGroup.Text>
      </InputGroup>
</Form.Group>

  <br/>

<Form.Group className="mb-3 recipient-control" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <InputGroup>
      <FormControl disabled value={finalAmount} onChange={e => setFinalAmount(e.target.value)} placeholder="0.00" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
      {props.recipient.Country} &nbsp;&nbsp; <CountryIcon name={props.recipient.Country}/>
      </InputGroup.Text>
      </InputGroup>
</Form.Group>
<fieldset>
  <Form.Group as={Row}>
    <Col sm={12} md={6}>
      <b className='pull-right'>{formatAmount(conversion_fee,props.account.Currency)}</b>
      <Form.Check style={{marginLeft:30}}
        type="radio"
        label="Conversion fee"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      />
      </Col>
  </Form.Group>
  <Form.Group className='check-control' as={Row}>
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


export default InternationalPayment;
