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


export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () => {
  const response = await DashboardServices.fetchTransfers() 
  console.log(response)
  return response.data; 
});

// export const fetchPostByIdAsync = createAsyncThunk(
//   'posts/fetchPostById',
//   async (postId) => {
//     const response = await fetchPostById(postId); // Call your API function to fetch a post by ID
//     return response.data; // Assuming your API returns data in the `data` field
//   }
// );