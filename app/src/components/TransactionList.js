import React from 'react';
import {
Table
} from 'react-bootstrap';

function TransactionList(props) {
  var getDate=function(date){
    const now = new Date(date);
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' });
    const amPm = now.getHours() >= 12 ? 'PM' : 'AM';
    const dateString = now.toLocaleDateString();
    return `${dateString} ${timeString} ${amPm}`;
  }

var formatAmount=function(number,currency){
        if(!currency){
          currency="NGN";
        }
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
              <td><b>{transaction.TransactionDetail.MakePayment.Recipient.FullName.FirstName+" "+transaction.TransactionDetail.MakePayment.Recipient.FullName.LastName}</b></td>
              <td>{transaction.TransactionDetail.MakePayment.Description}</td>
              <td>{transaction.TransactionType}</td>
              <td><b>{formatAmount(transaction.TransactionDetail.MakePayment.Fee,transaction.TransactionDetail.MakePayment.Currency)}</b></td>
              <td><b>{formatAmount(transaction.TransactionDetail.MakePayment.Amount,transaction.TransactionDetail.MakePayment.Currency)}</b></td>
            </tr>
          )
      })}
      </tbody>:null
    }
    </Table>
    {props.transactions.length < 1 ? 
      <div className='padding'>
        <b>No transactions yet.</b>
      </div>:null}
</div>
</>
);

  }

export default TransactionList;
