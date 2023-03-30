import React,{useState,useEffect} from 'react';
import {
Navbar,Nav,Form,Image, Button, Offcanvas, InputGroup
} from 'react-bootstrap';
import "../css/search.css";
import "../css/header.css";
import { MdArrowBackIos, MdMenu, MdOutlineNotifications, MdSearch } from 'react-icons/md';
import Menu from './Menu';

function HeadBar(props) {
  const [show , showSettings ] = useState(false);
  const CloseSettings = () => showSettings(false);
  const openSettings = () => showSettings(true);
  const back =() => window.history.back();

  const [page, setPage] = useState("/accounts");

  function open(p){
      setPage(p);
  }

  useEffect(() => {
    setPage(window.location.pathname);
    }, []);


return (
<>
<Offcanvas show={show} onHide={CloseSettings} placement="start" className="bg-dark" closeButton>
    <Menu page={page} open={open}/>
</Offcanvas> 
<Navbar  sticky="top" className='header'>
      {/* <Nav.Item> */}
      {/* </Nav.Item> */}
      <Nav.Item>
      {props.backButton ? 
          <Button onClick={e=>back()} variant='clear'><MdArrowBackIos size={20}/></Button>:
          <Button onClick={openSettings} variant="light" className='menu-btn' size='lg'><MdMenu/></Button>}
      </Nav.Item>
        <Navbar.Brand style={{paddingTop:"5px"}}>
             &nbsp;&nbsp;<b>{props.title}</b>
        </Navbar.Brand>
        
        <Navbar.Collapse className="justify-content-end">
        <Nav.Item>
                    <InputGroup
                      className="search-input">
                    <InputGroup.Text style={{background:"none",borderRight:"none"}}>
                      <MdSearch/>
                    </InputGroup.Text>
                      <Form.Control style={{background:"none",borderLeft:"none"}}
                      type="search"
                      placeholder="Type to search..."
                      aria-label="Search"
                      />
                    </InputGroup>
                  </Nav.Item>
        </Navbar.Collapse>

        <Nav.Item>
                    <Button variant='clear'><MdOutlineNotifications size={22}/></Button>
                  </Nav.Item>
                  <Nav.Item>
                    <Image src={props.user.Image} roundedCircle width={32} height={32} />
                  </Nav.Item>
    </Navbar>
    </>

);

  }

export default HeadBar;
