import React from 'react';
import {Button} from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
function NewAccountButton(props) {
 
return (
    <>
     <Button disabled={props.disabled} variant={props.variant} style={{fontWeight:"bolder"}} onClick={props.onClick}><MdAddCircleOutline/> &nbsp;Link a new account</Button>
    </>

);

  }

export default NewAccountButton;
