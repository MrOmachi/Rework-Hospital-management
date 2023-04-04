import React, { useState } from "react";
import {Button,Modal} from 'react-bootstrap';

function UnlinkButton(props) {
    const [show,showForm]=useState(false);

    function UnlinkAccount(){
        showForm(false);
        //function sdk to unlink account
    }
return (
    <>
     <Button variant="custard" onClick={e=>showForm(true)} size="sm" style={{margin:0}}>
        Unlink account
    </Button>



<Modal className="modal-info" show={show} onHide={e=>showForm(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Unlink Account</Modal.Title>
    </Modal.Header>
    <Modal.Body>
            <div>
                <h5>Are you sure you want to unlink account?</h5>
            </div>

    </Modal.Body>
    
    <Modal.Footer>
            <Button variant="custard" onClick={e=>UnlinkAccount()} className="pull-right" type="submit">
                   Yes
            </Button>
   </Modal.Footer>
</Modal>
    </>

);

  }

export default UnlinkButton;
