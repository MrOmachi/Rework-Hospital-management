import React from 'react';
import {Button} from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
function NewAccountButton(props) {
 
return (
    <>
     <Button variant={props.variant} style={{fontWeight:"bolder"}}><MdAddCircleOutline/> &nbsp;Open a new account</Button>
    </>

);

  }

export default NewAccountButton;
