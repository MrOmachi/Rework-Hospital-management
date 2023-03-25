import React,{useEffect, useState} from 'react';
import {Form, Button, Row,Col,Image,InputGroup,FormControl} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function LocalPayment(props) {
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState({Currency:"NGN"});
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


  var formatAmount=function(number,currency){
      return number.toLocaleString('en-US', { style: 'currency', currency: currency });
}


  function reviewPayment(){
    var Total=parseFloat(amount) + parseFloat(fee);
    props.review({
      recipient: props.recipient,
      account:props.account,
      amount: parseFloat(amount),
      finalAmount:finalAmount,
      fee: fee,
      description:description,
      total:Total || 0
  });
   }

 useEffect(() => {
  if(amount){
    setFee(amount*0.01);
    setFinalAmount(amount);
  }else{
    setFee(0);
    setFinalAmount(0);
  }
  //sdk implementation for making calculating fee
}, [amount]);

return (
<>
<Form className="pay-form">

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
          <Image src={props.recipient.CountryIcon} roundedCircle width={28} style={{float:"right"}} height={28} />
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

    <InputGroup>
      <Form.Control type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount you want to send" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
         {props.account.Currency} &nbsp;&nbsp; <Image src={props.account.Icon} roundedCircle width={28} style={{float:"right"}} height={28} />
      </InputGroup.Text>
      </InputGroup>
</Form.Group>

  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <InputGroup>
      <Form.Control disabled value={finalAmount} onChange={e => setFinalAmount(e.target.value)} placeholder="0.00" />
      <InputGroup.Text style={{background:"none",borderLeft:"none"}}>
         {props.recipient.Currency} &nbsp;&nbsp; <Image src={props.recipient.CountryIcon} roundedCircle width={28} style={{float:"right"}} height={28} />
      </InputGroup.Text>
      </InputGroup>
</Form.Group>

<br/>
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
  <Form.Control placeholder="Salary" value={description} onChange={e => setDescription(e.target.value)} />
</Form.Group>
<br/>

<Button variant="custard" disabled={!account || !recipient} onClick={e=>window.history.back()}>
Cancel
</Button>

<Button variant="custard" className="pull-right" disabled={!amount || !account || !recipient} onClick={reviewPayment}>
Continue
</Button>
</Form>


</>
)
}


export default LocalPayment;
