import React from 'react';
import {Button} from 'react-bootstrap';
import { MdAddCircleOutline } from 'react-icons/md';
function TopupButton(props) {
 
return (
    <>
     <Button variant={props.variant}><MdAddCircleOutline/> <b>&nbsp;Top-up</b></Button>
    </>

);

  }

export default TopupButton;
