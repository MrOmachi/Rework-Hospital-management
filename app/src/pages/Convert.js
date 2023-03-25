
import React, {useRef,useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';
import HeadBar from "../components/Headbar";
import Footer from "../components/Footer";
import {Form,Button,Row , Col} from "react-bootstrap";
import "../css/details.css";

function Convert(props) {
  const location = useLocation();
  const prevPathRef = useRef(null);
  const [account,setAccount]=useState({Currency:"NGN"});
  const [fee, setFee] = useState(0);
  const [conversionFee, setConversionFee] = useState(0);

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location]);



  var formatAmount=function(number,currency){
    return number.toLocaleString('en-US', { style: 'currency', currency: currency });
}


    return (
        <>
                    
                <Row>

                <Col md={12} sm={12} lg={12}>
                    <HeadBar title="Convert" user={props.user} backButton={true}/>
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

      <Form.Group className="mb-3 recipient-control" controlId="formGridAddress2">
            <Form.Label>Amount you’ll receive in your destination account</Form.Label>
            <Form.Control placeholder="0.00" />
      </Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Col sm={12} md={6}>
            <b className='pull-right'>{formatAmount(conversionFee,account.Currency)}</b>
            <Form.Check style={{marginLeft:30}}
              type="radio"
              label="Conversion fee"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            </Col>
        </Form.Group>
        <Form.Group className='check-control' as={Row}>
          <Col sm={12} md={6}>
            <b className='pull-right'>{formatAmount(fee,account.Currency)}</b>
            <Form.Check style={{marginLeft:30}}
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
