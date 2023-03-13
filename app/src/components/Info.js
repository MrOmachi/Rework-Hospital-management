import React from 'react';
import "../css/info.css";
function Info(props) {
 
return (
<>
     <div className='info text-center'>
        {props.image ?  <div className='info-image'>{props.image}</div>:null}
        <div className='info-body'>
            <h2>{props.title}</h2>
            <h6>{props.body}</h6>
            <br/>
        {props.button ? props.button:null}
        </div>
    </div>
</>
);

  }

export default Info;
