import React from 'react';
import {
Navbar,Nav,Container,Form,Image, Button, Row,Col
} from 'react-bootstrap';
import image from "../images/profiles/me.jpg";
import "../css/search.css";
import { MdOutlineNotifications } from 'react-icons/md';

function HeadBar(props) {
 
return (
<>
     
    <Navbar bg="#fff" expand="lg">
      <Container fluid>
      <Navbar.Brand><b>{props.title}</b></Navbar.Brand>
            <Nav>
                <Row>
                    <Col className='d-flex'>
                    <Form>
                        <Form.Control
                        type="search"
                        placeholder="Type to search..."
                        className="me-3 search-input"
                        aria-label="Search"
                        />
                    </Form>
                    <Button  style={{margin:10}} variant='clear'><MdOutlineNotifications size={22}/></Button>
                    <Image src={image} roundedCircle width={40} style={{margin:10}} height={40} />
                    </Col>
                </Row>
            </Nav>
        </Container>
      </Navbar>
    </>

);

  }

export default HeadBar;
