import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';

interface TransactionState {
  recipient: string;
  transactionDetails: string;
  amount: any;
  convertedAmount: number;
  fee: number;
  totalAmount: number;
  description: string;
}

const initialState: TransactionState = {
  recipient: "",
  transactionDetails: "",
  amount: "",
  convertedAmount:0,
  fee: 10,
  totalAmount: 0,
  description: "",

};

const transactionSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<string>) => {
      state.recipient = action.payload;
    },
    setTransactionDetails: (state, action: PayloadAction<string>) => {
      state.transactionDetails = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setFee: (state, action: PayloadAction<number>) => {
      state.fee = action.payload;
    },
    setConvertedAmount: (state, action: PayloadAction<number>) => {
      state.convertedAmount = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTotalAmount: (state) => {
      state.totalAmount = state.amount + state.fee;
      console.log(state.totalAmount)
    },
  },
});

export const {
  setRecipient,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
} = transactionSlice.actions;

export default transactionSlice.reducer;