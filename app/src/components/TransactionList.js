import React from 'react';
import {
Table
} from 'react-bootstrap';

function TransactionList(props) {
  var getDate=function(date){
    var d=new Date(date);
    return d.toUTCString();

}

var formatAmount=function(number,currency){
       return number.toLocaleString('en-US', { style: 'currency', currency: currency });
}
return (
<>
<div className="board">
<Table hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Recipient</th>
          <th>Description</th>
          <th>Type</th>
          <th>Fee</th>
          <th>Amount</th>
        </tr>
      </thead>
      {props.transactions.length ? 
      <tbody>
        {props.transactions.map(function(transaction,key){
          return(
            <tr key={key}>
              <td>{getDate(transaction.date)}</td>
              <td><b>{transaction.Name}</b></td>
              <td>{transaction.description}</td>
              <td>{transaction.type}</td>
              <td>{transaction.fee}</td>
              <td><b>{formatAmount(transaction.amount,transaction.currency)}</b></td>
            </tr>
          )
      })}
      </tbody>:
      <div className='padding'>
        <b>No transactions yet.</b>
      </div>
    }
    </Table>
</div>
</>
);

  }

export default TransactionList;
