import React from 'react';
import VirtualAccount from '../VirtualAccount';

function AllAccounts(props) {
 
return (
<>
<div className="board">

<div className='slide'>
{props.accounts.map(function(account,key){
                            return(
                                  <VirtualAccount key={key} account={account}/>
                             );
                        })}
</div>
</div>
</>
);

  }

export default AllAccounts;
