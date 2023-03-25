import React,{useState} from 'react';
import {
Navbar,Nav,Container,Form,Image, Button, Offcanvas, InputGroup
} from 'react-bootstrap';
import "../css/search.css";
import "../css/header.css";
import { MdArrowBackIos, MdOutlineNotifications, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

function HeadBar(props) {
  const [show , showSettings ] = useState(false);
  const CloseSettings = () => showSettings(false);
  const openSettings = () => showSettings(true);
  const back =() => window.history.back();
return (
<>
<Offcanvas show={show} onHide={CloseSettings} placement="start" closeButton>
  
</Offcanvas>
<Navbar className='header'>
      <Nav.Item>
      {props.backButton ? <Button onClick={e=>back()} variant='clear'><MdArrowBackIos size={20}/></Button>:null}
      </Nav.Item>
        <Navbar.Brand>
             &nbsp;&nbsp;<b>{props.title}</b>
        </Navbar.Brand>
        <Navbar.Toggle  onClick={openSettings}/>
        <Navbar.Collapse className="justify-content-end">
                  <Nav.Item>
                    <InputGroup>
                    <InputGroup.Text>
                      <MdSearch/>
                    </InputGroup.Text>
                      <Form.Control
                      type="search"
                      placeholder="Type to search..."
                      className="search-input"
                      aria-label="Search"
                      />
                    </InputGroup>
                  </Nav.Item>
                  <Nav.Item>
                    <Button variant='clear'><MdOutlineNotifications size={22}/></Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Image src={props.user.Image} roundedCircle width={32} height={32} />
                  </Nav.Item>
        </Navbar.Collapse>
    </Navbar>
    </>

);

  }

export default HeadBar;
