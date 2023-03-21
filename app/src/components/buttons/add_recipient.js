import React from 'react';
import {Button} from 'react-bootstrap';
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
function AddRecipientButton(props) {
 
return (
    <>
     <Button as={Link} variant={props.variant}><b><MdPersonAdd/> &nbsp;Add new recipient</b></Button>
    </>

);

  }

export default AddRecipientButton;
