import React from 'react';
import {Button} from 'react-bootstrap';
import {  MdArrowUpward } from 'react-icons/md';
function MakePayButton(props) {
 
return (
    <>
     <Button variant={props.variant}><b><MdArrowUpward/> &nbsp;Make Payment</b></Button>
    </>

);

  }

export default MakePayButton;
