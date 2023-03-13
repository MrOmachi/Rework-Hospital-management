
import React, { useState } from "react";
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import { ButtonGroup,Form,Button,Row , Col, Card ,ListGroup,Image} from "react-bootstrap";
import "../css/details.css";
import ngn from "../images/flags/ngn.png";

function Convert(props) {


    var getDate=function(date){
        var d=new Date(date);
        return d.toUTCString();

    }

    var formatAmount=function(number){
           return number.toLocaleString();
    }

    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Convert" user={props.user}/>
                </Col>
                <Col md={12} sm={12} lg={12}>
                    <div className="board padding">
                    <Form className="pay-form">
     

      <Form.Group className="mb-3" controlId="formGridSource">
            <Form.Label>Select source account</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Select source account</option>
                <option>...</option>
            </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Amount to convert</Form.Label>
            <Form.Control placeholder="Enter amount to convert" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cleva destination account</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Select Cleva destination account</option>
                <option>...</option>
            </Form.Select>
      </Form.Group>
        <br/>

      <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Amount you’ll receive in your destination account</Form.Label>
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
        <Form.Label>Amount to debit from source account</Form.Label>
        <Form.Control placeholder="0.00" />
      </Form.Group>
      <br/>

<Button variant="custard" type="reset">
  Cancel
</Button>

<Button variant="custard" className="pull-right" type="submit">
  Convert
</Button>
    </Form>
                    </div>
                </Col>
                </Row>
                <Footer/>
        </>
    );

}

export default Convert;