import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITransaction } from "../../components/model";
import DashboardServices from "../services/DashboardServices";
import { url } from "../services/ApiUrl";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

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
  async (TransactionIdentifier:string) => {
    const response = await DashboardServices.fetchTransfersByID(TransactionIdentifier); // Call your API function to fetch a post by ID
  
    console.log(response)
    return response.data; // Assuming your API returns data in the `data` field
  }
);

export const cancelTransfer = createAsyncThunk(
  'transactions/cancelTransfer',
  async ({ TransactionIdentifier, data }: { TransactionIdentifier: string; data:any}) => {
    try {
      const response = await DashboardServices.cancelTransaction(TransactionIdentifier, data);
      console.log(response)
      return response.data;
    } catch (error) {
      throw new Error('Failed to cancel transaction.');
    }
  }
);

export const updateTransaction = async (
  id: string,
  TransactionState: string
) => {
  try {
    const response = await axios.put(
      `${url}transactions/${id}`,
      { TransactionState }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update transaction');
  }
};



export const fetchRates = createAsyncThunk('transactions/fetchRates', async () => {
  const response = await DashboardServices.fetchRate() 
  console.log(response)
  return response.data; 
});
