import React, { useState } from "react";
import {Button,Modal,Form} from 'react-bootstrap';
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
function AddRecipientButton(props) {
 
    const [firstName,setFirst] = useState("");
    const [show,showForm]=useState(false);
return (
    <>
     <Button onClick={e=>showForm(true)} variant={props.variant}><b><MdPersonAdd/> &nbsp;Add new recipient</b></Button>



<Modal show={show} onHide={e=>showForm(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Create new recipient</Modal.Title>
  </Modal.Header>
    <Modal.Body>
   
        <Form>

        <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control type='number' value={firstName} onChange={e => setFirst(e.target.value)} placeholder="Enter recipient first name" />
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='number' value={firstName} onChange={e => setFirst(e.target.value)} placeholder="Enter recipient first name" />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type='number' value={firstName} onChange={e => setFirst(e.target.value)} placeholder="Enter recipient first name" />
        </Form.Group>



            <Button variant="custard" className="pull-right" type="submit">
                    Add Recipient
            </Button>

        </Form>
   
    </Modal.Body>
</Modal>
    </>

);

  }

export default AddRecipientButton;
