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
            <Navbar.Brand className="justify-content-start">
             {props.history ? <Button as={Link} to={props.history} variant='clear'><MdArrowBackIos size={20}/></Button>:null}
             &nbsp;&nbsp;<b>{props.title}</b>
            </Navbar.Brand>
            <Nav  className="justify-content-center"></Nav>
            <Nav className="justify-content-end">
            <Nav.Item>
              <Form>
                  <Form.Control
                  type="search"
                  placeholder="Type to search..."
                  className="search-input"
                  aria-label="Search"
                  />
              </Form>
              </Nav.Item>
              <Nav.Item>
                <Button variant='clear'><MdOutlineNotifications size={27}/></Button>
              </Nav.Item>
              <Nav.Item>
                <Image src={props.user.image} roundedCircle width={40} height={40} />
              </Nav.Item>
              </Nav>
      </Navbar>
    </>

);

  }

export default HeadBar;
