import React from 'react';
import {Modal,ListGroup} from 'react-bootstrap';

function ListOptions(props){
  const choose=function(recipient){
        props.Selection(recipient);
        close();
      }; 
      function close(){
        props.ShowOptions(false);
      }
return (
<>
<Modal show={props.show} onBackdropClick={close} onHide={close}>
    <Modal.Body>
      <ListGroup>
    <ListGroup className="account_details">
        <ListGroup.Item>
            <b>{props.title}</b>
        </ListGroup.Item>
        {props.recipients.map(function(recipient,key){
                  return(
                        <ListGroup.Item key={key} onClick={choose(recipient)}>
                            
                        </ListGroup.Item>
                        )
            })
          }
          {props.button}
    </ListGroup>
    </ListGroup>
    </Modal.Body>
</Modal>


</>
)
}

export default ListOptions;

