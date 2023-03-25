import React from "react";
import {Button,Modal} from 'react-bootstrap';
function Message(props) {
 

return (
    <>

<Modal show={props.show} onHide={e=>props.hide(false)}>
  <Modal.Header closeButton>
    <Modal.Title>{props.title}</Modal.Title>
  </Modal.Header>
    <Modal.Body>
            <div>
                <h5>{props.body}</h5>
            </div>
    </Modal.Body>
    <Modal.Footer>
            <Button variant="custard" onHide={e=>props.hide(false)}>
                Done
            </Button>
    </Modal.Footer>
</Modal>
    </>

);

  }

export default Message;
