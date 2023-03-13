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
          <Col sm={12} md={5} lg={5}>
            <div className='foot-bar'>
                <a href="#">Privacy Policy</a>
                <a href="#">License</a>
                <a href="#">API</a>
                <a href="#">Help Center</a>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4}>
            <div className='foot-bar text-left'>
                <small>&copy; 2023 All rights reserved</small>
            </div>
          </Col>
          
          <Col sm={12} md={3} lg={3}>
            <div className='foot-bar'>
                <small style={{color:"#000"}}>English&nbsp;&nbsp;&nbsp;<BsGlobe size={10}/>
                <Button variant='clear' style={{marginLeft:15,marginRight:15}}><BsMoonFill size={10}/></Button>
                </small>
            </div>
          </Col>
        </Row>
     </footer>
    
    </>

);

  }

export default Footer;
