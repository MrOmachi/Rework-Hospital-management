import React, { useEffect, useState } from "react";
import {Button,Modal,Form,Row, Col} from 'react-bootstrap';
import { MdPersonAdd } from 'react-icons/md';
function AddRecipientButton(props) {
 
    const [firstName,setFirst] = useState(""); 
    const [accountNumber,setAccountNumber] = useState(""); 
    const [recipientAddress,setRecipientAddress] = useState(""); 
    const [accountType,setType] = useState(""); 
    const [country,setCountry] = useState(); 
    const [Countries,LoadCountries] = useState([]); 
    const [Banks,LoadBanks] = useState([]); 
    const [bank,setBank] = useState({Name:""}); 
    const [show,showForm]=useState(false);




    useEffect(function(){
        //sdk for list of countries
        LoadCountries([
            {Name:"Nigeria",Country:"NG"},
            {Name:"United States",Country:"US"}
        ])
        //sdk for list of banks
        LoadBanks([
                   { Name:"Access Bank",Country:"NG"},
                   { Name:"Zenith Bank",Country:"NG"},
                   { Name:"Polaris Bank",Country:"US"}
                ]);
    },[]);


return (
    <>
     <Button onClick={e=>showForm(true)} variant={props.variant}><b><MdPersonAdd/> &nbsp;Add new recipient</b></Button>



<Modal className="modal-form" show={show} onHide={e=>showForm(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Create new recipient</Modal.Title>
  </Modal.Header>
    <Modal.Body>
   
        <Form>

        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type='number' value={firstName} onChange={e => setFirst(e.target.value)} />
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
            <Form.Control type='number' value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3">
            <Form.Label>Account type</Form.Label>
            <Form.Select value={accountType} onChange={e => setType(e.target.value)}>
                <option>Savings</option>
                <option>Checkings</option>
            </Form.Select>
        </Form.Group>


        <Form.Group className="mb-3">
            <Form.Label>Recipient Address</Form.Label>
            <Form.Control type='number' value={recipientAddress} onChange={e => setRecipientAddress(e.target.value)} />
        </Form.Group>

        <Button variant="custard" type="reset">
Cancel
</Button>

            <Button variant="custard" className="pull-right" type="submit">
                    Save
            </Button>

        </Form>
   
    </Modal.Body>
</Modal>
    </>

);

  }

export default AddRecipientButton;
