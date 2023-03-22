import React from 'react';
import {Button} from 'react-bootstrap';
import { MdRefresh, MdRepeat } from 'react-icons/md';
import { Link } from 'react-router-dom';
function ConvertButton(props) {
 
return (
    <>
     <Button as={Link} to="/payments/convert" variant={props.variant}><b><MdRefresh/> &nbsp;Convert</b></Button>
    </>

);

  }

export default ConvertButton;
