import React,{useState} from "react";
import {Button,Modal} from 'react-bootstrap';
function Message(props) {

  const [show,openModal]=useState(true); 
  function close(state){
      openModal(state);
  }       
          return (
              <>
              <Modal show={show} onHide={e=>close(false)}>
              <Modal.Header closeButton>
                  <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                          <div>
                              <h5>{props.body}</h5>
                          </div>
                  </Modal.Body>
                  <Modal.Footer>
                          <Button variant="custard" onHide={e=>close(false)}>
                              Done
                          </Button>
                  </Modal.Footer>
              </Modal>
              </>
          );

}
export default Message;
