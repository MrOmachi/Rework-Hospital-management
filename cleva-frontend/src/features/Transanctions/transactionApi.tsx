import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITransaction } from "../../components/model";
import DashboardServices from "../services/DashboardServices";
import { ToastContainer, toast } from "react-toastify";

export const postTransaction = createAsyncThunk("transactions/postTransaction", async (transaction: ITransaction) => {
  try {
      const response = await DashboardServices.createTransaction(transaction)
      toast.success("Added Successfully");
      return response.data
  } catch (error) {
      console.log(error)
  }
})

export const fetchRecipients = createAsyncThunk('transactions/fetchRecipients', async () => {
  const response = await DashboardServices.fetchRecipients();
  const res = response.data; 
  return res.RecipientSummaryList;
});


export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await DashboardServices.fetchTransfers() 
  return response.data; 
});



export const fetchTransactionById = createAsyncThunk(
  'transactions/fetchTransactionsById',
  async (TransactionIdentifier:string, status: any) => {
    const response = await DashboardServices.cancelTransaction(TransactionIdentifier, status); // Call your API function to fetch a post by ID
    console.log(response)
    return response.data; // Assuming your API returns data in the `data` field
  }
);

export const cancelTransfer = createAsyncThunk(
  'transactions/cancelTransfer',
  async (TransactionIdentifier:string) => {
    const response = await DashboardServices.fetchTransfersByID(TransactionIdentifier); // Call your API function to fetch a post by ID
    console.log(response)
    return response.data; // Assuming your API returns data in the `data` field
  }
);