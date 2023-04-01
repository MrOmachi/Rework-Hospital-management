import React, { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import "../../css/info.css";
function Error(props) { 
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
                                Okay
                            </Button>
                    </Modal.Footer>
                </Modal>
                </>
            );
  }

export default Error;
