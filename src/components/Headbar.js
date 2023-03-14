import React from 'react';
import {
Navbar,Nav,Container,Form,Image, Button, Row,Col
} from 'react-bootstrap';
import "../css/search.css";
import "../css/header.css";
import { MdArrowBackIos, MdOutlineNotifications } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HeadBar(props) {
 
return (
<>
<Navbar className='header'>
      <Container>
        <Navbar.Brand href="#home">
             {props.history ? <Button as={Link} to={props.history} variant='clear'><MdArrowBackIos size={20}/></Button>:null}
             &nbsp;&nbsp;<b>{props.title}</b>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav.Item>
                      <Form.Control
                      type="search"
                      placeholder="Type to search..."
                      className="search-input"
                      aria-label="Search"
                      />
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant='clear'><MdOutlineNotifications size={27}/></Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Image src={props.user.image} roundedCircle width={40} height={40} />
                  </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>

);

  }

export default HeadBar;
