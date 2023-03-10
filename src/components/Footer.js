import React from 'react';
import {
Row,Col,Container,Button
} from 'react-bootstrap';
import { MdOutlineMap, MdSwitchLeft } from 'react-icons/md';
import { BsGlobe,BsMoonFill} from 'react-icons/bs';
import "../css/footer.css";

function Footer(props) {
 
return (
    <>
     
     <footer className="footer">
    <Row>
      <Col sm={12} md={10} lg={10}>
      <div className='foot-bar'>
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <a href="#">Help Center</a>
          <small>&copy; 2023 All rights reserved</small>
      </div>
      </Col>
      <Col sm={12} md={2} lg={2}>
        <div className='padding'>
            <b>English</b>&nbsp;&nbsp;&nbsp;<BsGlobe/>
            <Button  style={{margin:10}} variant='clear'><BsMoonFill size={14}/></Button>
         </div>
      </Col>
    </Row>
</footer>
    
    </>

);

  }

export default Footer;
