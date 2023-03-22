import {useState} from 'react';
import {Modal,Form} from 'react-bootstrap';

function newRecipient(props){
    const [firstName,setFirst] = useState("");
return (
<>
<Modal show={props.show}>
    <Modal.Body>
   
        <Form>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>First name</Form.Label>
            <Form.Control type='number' value={firstName} onChange={e => setFirst(e.target.value)} placeholder="Enter recipient first name" />
        </Form.Group>
        </Form>
   
    </Modal.Body>
</Modal>


</>
)
}

export default newRecipient;

