import React from 'react';
import {Button} from 'react-bootstrap';
import {  MdArrowUpward } from 'react-icons/md';
import { Link } from 'react-router-dom';
function MakePayButton(props) {
 
return (
    <>
     <Button as={Link} to="/payments/create" variant={props.variant}><b><MdArrowUpward/> &nbsp;Make Payment</b></Button>
    </>

);

  }

export default MakePayButton;
