import React from 'react';
import {Button} from 'react-bootstrap';
import { MdFileCopy } from 'react-icons/md';
function RequestPayButton(props) {
 
return (
    <>
     <Button variant={props.variant}><b><MdFileCopy/> &nbsp;Request Payment</b></Button>
    </>

);

  }

export default RequestPayButton;
