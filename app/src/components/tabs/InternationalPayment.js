import React,{useState,useEffect} from 'react';
import {Form, Button,Image,Row,Col} from 'react-bootstrap';

function InternationalPayment(props) {
 
  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [account, setAccount] = useState({});
  const [recipient, setRecipient] = useState({});
  const [rate, setRate] = useState({});
  const [fee, setFee] = useState(0);
  const [conversion_fee, setConversionFee] = useState(0);
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
  setRate({FromCurrencyRate:1,ToCurrencyRate:750});
  //sdk for rate to change
}, []);



useEffect(() => {
  setFee(amount*0.10);
  setConversionFee(amount*0.05);
  setFinalAmount(rate.ToCurrencyRate*amount);
  //sdk implementation for making calculating converstion fee
  //sdk implementation for making calculating transfer fee
}, [amount,rate]);


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

  <br/>

  <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>You will send</Form.Label>
      <Form.Control type='number' value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount you want to send" />
</Form.Group>

  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <Form.Control disabled value={finalAmount} onChange={e => setFinalAmount(e.target.value)} placeholder="0.00" />
      <h6 style={{margin:5}}><b>{rate.FromCurrencyRate} {props.account.Currency} = {rate.ToCurrencyRate} {props.recipient.Currency}</b></h6>
</Form.Group>
<br/>
<fieldset>
  <Form.Group as={Row}>
    <Col sm={12} md={6}>
      <b className='pull-right'>{fee} {props.account.Currency ? props.account.Currency:"USD"}</b>
      <Form.Check style={{marginLeft:30}}
        type="radio"
        label="Conversion fee"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      />
      <b className='pull-right'>{conversion_fee} {props.account.Currency ? props.account.Currency:"USD"}</b>
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


export default InternationalPayment;
