import React from 'react';
import {Form, Button, Row,Col} from 'react-bootstrap';

function LocalPayment(props) {
 
return (
<>
<Form className="pay-form">
<Form.Group className="mb-3" controlId="formGridSource">
      <Form.Label>Recipient</Form.Label>
      <Form.Select defaultValue="Choose...">
          <option>Select recipient</option>
          <option>...</option>
      </Form.Select>
</Form.Group>


<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Pay from</Form.Label>
      <Form.Select defaultValue="Choose...">
          <option>Select payment account</option>
          <option>...</option>
      </Form.Select>
</Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>You will send</Form.Label>
      <Form.Control placeholder="Enter amount to convert" />
</Form.Group>

  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Recipient will get</Form.Label>
      <Form.Control placeholder="0.00" />
</Form.Group>

<br/>
<fieldset>
  <Form.Group as={Row} className="mb-3">
    <Col sm={10}>
      <Form.Check
        type="radio"
        label="Conversion fee"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      />
      <Form.Check
        type="radio"
        label="Transfer fee"
        name="formHorizontalRadios"
        id="formHorizontalRadios3"
      />
    </Col>
  </Form.Group>
</fieldset>
  <br/>

<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Description</Form.Label>
  <Form.Control placeholder="" />
</Form.Group>
<br/>

<Button variant="custard" type="reset">
Cancel
</Button>

<Button variant="custard" className="pull-right" type="submit">
Continue
</Button>
</Form>
</>
)
}


export default LocalPayment;
