import {Modal,ListGroup,Image} from 'react-bootstrap';

function ReviewPayment(props){
  const confirm=function(){
        props.confirm();
        close();
      }; 
      function close(){
        props.show(false);
      }
return (
<>
<Modal className="modal-review" show={props.show} onHide={close}>

    <Modal.Header closeButton>
      <Modal.Title>
              <b>Review Payment</b>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      
    </Modal.Body>

</Modal>
</>
)
}

export default ReviewPayment;

