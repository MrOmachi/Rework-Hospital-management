import React from 'react';
import "../../css/info.css";
import Info from '../Info';
import image from "../../images/doodles/link.png";
import { Image } from 'react-bootstrap';
import NewAccountButton from "../buttons/new_account";

function LinkedAccounts(props) {
 
return (
<>
<div className="board">
    <Info image={<Image src={image} width={250} />} title="Link a new account" body="Connect your existing bank account to Cleva
      to enable easy transfers into your Cleva account" button={<NewAccountButton variant="link"/>}/>
</div>
</>
);

  }

export default LinkedAccounts;
