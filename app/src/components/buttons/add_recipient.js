import React, { useEffect, useState } from "react";
import {Button,Modal,Form,Row, Col, Spinner} from 'react-bootstrap';
import { MdPersonAdd } from 'react-icons/md';
import { createRecipient } from "../../API";
import Info from "../Info";


function AddRecipientButton(props) {
 
    const [loading,setLoader]=useState(false);
    const [FirstName,setFirstName] = useState(""); 
    const [LastName,setLastName] = useState(""); 
    const [MiddleName,setMiddleName] = useState(""); 
    const [accountNumber,setAccountNumber] = useState(""); 
    const [recipientAddress,setRecipientAddress] = useState("");
    const [recipientSecondAddress,setRecipientSecondAddress] = useState(""); 
    const [recipientState,setRecipientState] = useState(""); 
    const [zipcode,setZipcode] = useState(""); 
    const [city,setCity] = useState(""); 
    const [LGA,setLGA] = useState(""); 
    const [accountType,setType] = useState(""); 
    const [routingNumber,setRoutingNumber] = useState(""); 
    const [country,setCountry] = useState(); 
    const [Countries,LoadCountries] = useState([]); 
    const [Banks,LoadBanks] = useState([]); 
    const [bank,setBank] = useState({Name:""}); 
    const [show,showForm]=useState(false);
    const [error,setError]=useState();

    function errorMessage(msg){
        setError(msg);
       }
 

const addRecipient = async () => {
    console.log("submitting.....");
    setLoader(true);
    var data={
        FullName:{
            FirstName:FirstName,
            MiddleName:MiddleName,
            LastName:LastName
        },
        AccountNumber:accountNumber,
        Address:{
            StreetAddress:recipientAddress,
            SecondStreetAddress:recipientSecondAddress,
            City:city,
            Country:country,
            LGA:LGA,
            Zipcode:zipcode,
            StateORTerritory:recipientState
        },
        Country:country,
        AccountType:accountType,
        BankName:bank,
        RoutingNumber:routingNumber
    }
    console.log(data);
    var resp = await createRecipient(data);
    console.log(resp);
     if(resp.status===200){
        showForm(false);
        setLoader(false);
        props.listRecipients();
        return(
            <Info  title="Added Recipient" body="successfully added recipient!"/>
        )
      }else{
        setLoader(false);
        errorMessage(resp.data.Error.Message);
      }
}

    useEffect(function(){
        //sdk for list of countries
        LoadCountries([
            {Name:"Nigeria",Country:"Nigeria"},
            {Name:"United States",Country:"USA"}
        ])
        //sdk for list of banks
        LoadBanks([
                   { Name:"Access Bank",Country:"Nigeria"},
                   { Name:"Zenith Bank",Country:"Nigeria"},
                   { Name:"Bank of America",Country:"USA"}
                ]);
    },[]);


return (
    <>
     <Button onClick={e=>showForm(true)} variant={props.variant}><b><MdPersonAdd/> &nbsp;Add new recipient</b></Button>



<Modal className="modal-form" show={show} onHide={e=>showForm(false)}>
  <Modal.Header closeButton={!loading}>
    <Modal.Title>Create new recipient</Modal.Title>
  </Modal.Header>
    <Modal.Body>
   
        <Form>
        <Row>
            <Col md={4}>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Enter first name" value={FirstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>
            </Col>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Col md={7}>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Enter last name" value={LastName} onChange={e => setLastName(e.target.value)} />
            </Form.Group>
            </Col>
        </Row>

        <Form.Group className="mb-3">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control placeholder="Enter middle name" value={MiddleName} onChange={e => setMiddleName(e.target.value)} />
        </Form.Group>

        <Row>
            <Col md={4}>
                <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Select  value={country} onChange={e => setCountry(e.target.value)}>
                    <option>Select country</option>
                    {Countries ? Countries.map(function(c,key){
                        return(
                            <option value={c.Country} key={key}>{c.Name}</option>
                            )
                        })
                    :null}
                </Form.Select>
                </Form.Group>
            </Col>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Col md={7}>
                <Form.Group className="mb-3">
                <Form.Label>Bank</Form.Label>
                <Form.Select  value={bank} onChange={e => setBank(e.target.value)}>
                    <option>Select bank</option>
                    {Banks ? Banks.filter(function(bank) {
                        return bank.Country === country;
                        }).map(function(countrybank,key){
                        return(
                            <option value={countrybank.Name} key={key}>{countrybank.Name}</option>
                            )
                        })
                    :null}
                </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Form.Group className="mb-3">
            <Form.Label>Account Number</Form.Label>
            <Form.Control placeholder="Enter account number" value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3">
            <Form.Label>Account type</Form.Label>
            <Form.Select value={accountType} onChange={e => setType(e.target.value)}>
                <option value="savings">Savings</option>
                <option value="checkings">Checkings</option>
            </Form.Select>
        </Form.Group>


       



        {(country === "United States" || country === "USA") && (
        <Form.Group className="mb-3">
            <Form.Label>Routing Number</Form.Label>
            <Form.Control placeholder="Enter routing number" value={routingNumber} onChange={e => setRoutingNumber(e.target.value)} />
        </Form.Group>)
        }


       

        <Form.Group className="mb-3">
            <Form.Label>Recipient Address</Form.Label>
            <Form.Control placeholder="Enter recipient address" value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Recipient Address 2 <small>(optional)</small></Form.Label>
            <Form.Control placeholder="Enter second address" value={recipientSecondAddress} onChange={e => setRecipientSecondAddress(e.target.value)} />
        </Form.Group>

        <Row>
            <Col md={7}>
            <Form.Group className="mb-3">
                <Form.Label>Sate</Form.Label>
                <Form.Control placeholder="Enter state or territory" value={recipientState} onChange={e => setRecipientState(e.target.value)} />
            </Form.Group>
            </Col>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Col md={4}>
            <Form.Group className="mb-3">
                <Form.Label>LGA</Form.Label>
                <Form.Control placeholder="LGA" value={LGA} onChange={e => setLGA(e.target.value)} />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={7}>
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="Enter city" value={city} onChange={e => setCity(e.target.value)} />
            </Form.Group>
            </Col>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Col md={4}>
            <Form.Group className="mb-3">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control placeholder="Enter zipcode" value={zipcode} onChange={e => setZipcode(e.target.value)} />
            </Form.Group>
            </Col>
        </Row>

        </Form>

        {error ? <Row>
                    
                    <e>{error}</e>
                    
                    </Row>:null}
        <br/>
        <Button variant="custard" disabled={loading}  className="pull-left" type="reset" onClick={e=>showForm(false)}>
            Cancel
            </Button>

            <Button variant="custard" disabled={loading || !FirstName || !LastName || !accountNumber || !bank || !country} className="pull-right" onClick={addRecipient}>
              {loading ? <Spinner animation="border" size="sm" /> : 'Save'}
            </Button>   
    </Modal.Body>
    <Modal.Footer>


    </Modal.Footer>
</Modal>
    </>

);

  }

export default AddRecipientButton;
