import React from 'react';
import {Button} from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
function NewAccountButton(props) {
 
return (
    <>
     <Button variant={props.variant}><b><MdAddCircleOutline/> &nbsp;Open a new account</b></Button>
    </>

);

  }

export default NewAccountButton;
