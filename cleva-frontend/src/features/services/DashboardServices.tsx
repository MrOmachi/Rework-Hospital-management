import axios from "axios";
import authHeader from "./AuthHeader";
import { url } from "./ApiUrl";


type CreateTransactions = {
  senderFirstName: string;
  senderLastName:string;
  RecipientFirstName:string;
  RecipientLastName: string;
  country:string;
  bankName: string;
  accountNumber: number;
  accountType: string;
  amount:number;
  fee: number;
  description:string;
}

const createTransaction = (data:CreateTransactions) => {
  return axios.post(url + "transactions", {
    TransactionType: "MAKE_PAYMENT",
      TransactionDetail: {
        Currency: "USD",
        TransactionDomain: "INTERNATIONAL",
        // Sender: {
        //   FullName: {
        //     FirstName: data.senderFirstName,
        //     LastName: data.senderLastName
        //   }
        // },
        Recipient: {
          FullName: {
            FirstName: data.RecipientFirstName,
            LastName: data.RecipientLastName
          },
          // Country: data.country,
          BankName: data.bankName,
          AccountNumber: data.accountNumber,
          AccountType: "SAVING"
        },
        Amount: data.amount,
        Fee: data.fee,
        Description: data.description
      }
  }, {
    headers: authHeader(),
  });
};

export default {
  createTransaction,
 
};
