import axios from "axios";
import authHeader from "./AuthHeader";
import { url } from "./ApiUrl";
import { Dispatch } from 'redux';
import { FormActionTypes, FormData, FormAction } from '../Transanctions/formType';

export const submitTransaction = (formData: FormData) => {
  return {
    type: FormActionTypes.SUBMIT_FORM,
    payload: formData,
  };
};

// export const postFormData = (formData: FormData) => {
//   return (dispatch: Dispatch<FormAction>) => {

type CreateTransactions = {
  // senderFirstName: string;
  // senderLastName:string;
  RecipientFirstName:string;
  RecipientLastName: string;
  // country:string;
  RecipientIdentifier: string;
  bankName: string;
  AccountNumber: string;
  // accountType: string;
  amount:number;
  fee: number;
  description:string;
}

export const createTransaction = (data:CreateTransactions) => {
  return axios.post(url + "transactions", {
    TransactionType: "MAKE_PAYMENT",
      TransactionDetail: {
        Currency: "USD",
        TransactionDomain: "INTERNATIONAL",
        // Sender: {
        //   FullName: {
        //     FirstName: "Sender",
        //     LastName: "Surname"
        //   }
        // },
        Recipient: {
          FullName: {
            FirstName: data.RecipientFirstName,
            LastName: data.RecipientLastName
          },
          RecipientIdentifier: data.RecipientIdentifier,
          // Country: data.country,
          BankName: data.bankName,
          AccountNumber: data.AccountNumber,
          AccountType: "SAVING"
        },
        Amount: data.amount,
        Fee: data.fee,
        Description: data.description
      }
  },
  //  {
  //   headers: authHeader(),
  // }
  );
}; 

export const fetchTransfers = () => {
  return axios.get(url + "transactions", 
  // { headers: authHeader() }
  );
}


export const fetchTransfersByID = (TransactionIdentifier:string) => {
  return axios.get(url + `transactions/${TransactionIdentifier}`,
  //  { headers: authHeader() }
   );
} 



// recipients 
export const fetchRecipients = () => {
  return axios.get(url + "recipients", 
  // { headers: authHeader() }
  );
}

export default {
  submitTransaction,
  createTransaction,
  fetchTransfers,
 fetchRecipients,
 fetchTransfersByID
};
