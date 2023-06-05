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
