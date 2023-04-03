import { useEffect,useState } from 'react';
import {Modal,ListGroup,Button,Row,Spinner} from 'react-bootstrap';
import { createPayment,getRecipient,getVirtualAccount } from '../../API';

function Review(props){
  const [recipient,setRecipient]=useState(props.data.recipient);
  const [account,setAccount]=useState({Currency:"NGN"});
  const [loading,setLoader]=useState(false);
  const [error,setError]=useState();




  const loadAccount = async (id) => {
    var account= await getVirtualAccount(id);
    console.log("Account:");
    if(account.status===200){
      console.log("sent....");
      console.log(account.data);
        setAccount(account.data);
    }else{
      var act=props.data.account;
      console.log(act);
      setAccount(act);
    }
    }


  const loadRecipient = async (id) => {
    var person= await getRecipient(id);
    setRecipient(person.data);
    }
  
      function close(){
        props.close();
      }

      function errorMessage(msg){
       setError(msg);
      }


      var formatAmount=function(number,currency){
        if(!currency){
          if(recipient.Country==="USA" || recipient.Country==="United States"){
            currency='USD';
          }else{
            currency='NGN';
          }
        }
          return number.toLocaleString('en-US', { style: 'currency', currency: currency });

      }


      

      useEffect(() => {
        loadRecipient(props.data.recipient.RecipientIdentifier);
        loadAccount(props.data.account.VirtualAccountIdentifier);
        console.log("reviewing.....")
      }, []);


      const  Transfer= async function(){
        setLoader(true);
        var domain="INTERNATIONAL";
        if(account.Country===recipient.Country){
          domain="LOCAL";
        }
        var data={
          Domain:domain,
          Recipient:recipient,
          Sender:{
            UserID: props.Sender.UserID,
            FullName: {
              FirstName: props.Sender.FullName.FirstName,
              MiddleName:  props.Sender.FullName.MiddleName,
              LastName:  props.Sender.FullName.LastName
            },
            BankName: account.BankName,
            AccountNumber: account.AccountNumber
          },
          Amount:props.data.amount,
          Currency:account.Currency,
          Fee:props.data.fee,
          Description:props.data.description
        };
        console.log("sending......");
        console.log(data);
        var resp= await createPayment(data);
        console.log(resp.data);
        if(resp.status===200){
          props.listTransactions();
          close();
          setLoader(false);
          window.location.href="/payments";
        }else{
          setLoader(false);
          errorMessage(resp.data.Error.Message);
        }
      }


return (
<>
<Modal className="modal-review" show={props.show} onHide={close}>

    <Modal.Header closeButton={!loading}>
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
                    {error ? <Row>
                    
                    <e>{error}</e>
                    
                    </Row>:null}
            <Button variant="custard" disabled={loading} className="pull-left" onClick={close}>
              Cancel
            </Button>

            <Button variant="custard" disabled={loading} className="pull-right" onClick={Transfer}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Transfer'}
            </Button>     
    </Modal.Body>

    <Modal.Footer>
    </Modal.Footer>
</Modal>
</>
)
}

export default Review;

