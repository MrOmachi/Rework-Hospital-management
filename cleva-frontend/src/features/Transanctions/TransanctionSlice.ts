import { ITransaction } from './../../components/model';
import { postTransaction } from './transactionApi';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


const initialState: ITransaction = {
  // recipient: "",
  RecipientFirstName: "",
  RecipientLastName: "",
  transactionDetails: "",
  amount: "",
  convertedAmount:0,
  fee: 10,
  totalAmount: 0,
  description: "",
  accountNumber: "234786434553",
  bankName: "ACCESS BANK PLC",
  loading: false,
  error: null,
};



const transactionSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    setRecipientName: (state, action: PayloadAction<string>) => {
      state.RecipientFirstName = action.payload
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
    },
    setAccountNumber: (state, action: PayloadAction<string>) => {
      state.accountNumber = action.payload;
    },
    setBankName: (state, action: PayloadAction<string>)  => {
      state.bankName = action.payload;

    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTransaction.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(postTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
  
});

export const {
  setRecipientName,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
  setAccountNumber,
  setBankName,
  setLoading
} = transactionSlice.actions;


export default transactionSlice.reducer;