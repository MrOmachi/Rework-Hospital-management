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
              <td>{getDate(transaction.Date)}</td>
              <td><b>{transaction.TransactionDetail.PaymentMade.Recipient.FullName.FirstName+" "+transaction.TransactionDetail.PaymentMade.Recipient.FullName.LastName}</b></td>
              <td>{transaction.TransactionDetail.PaymentMade.Description}</td>
              <td>{transaction.TransactionType}</td>
              <td><b>{formatAmount(transaction.TransactionDetail.PaymentMade.Fee,transaction.TransactionDetail.PaymentMade.Currency)}</b></td>
              <td><b>{formatAmount(transaction.TransactionDetail.PaymentMade.Amount,transaction.TransactionDetail.PaymentMade.Currency)}</b></td>
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
