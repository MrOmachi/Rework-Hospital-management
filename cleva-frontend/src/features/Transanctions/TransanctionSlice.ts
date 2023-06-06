import { ITransaction } from './../../components/model';
import { postTransaction, fetchTransactions } from './transactionApi';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface TransactionState {
  RecipientFirstName: string;
  RecipientLastName: string;
  transactionDetails?: string;
  amount: any;
  convertedAmount: number;
  fee: number;
  totalAmount: number;
  description: string;
  accountNumber: string;
  bankName: string;
  loading: boolean;
  error: string | null;
  allTransfer: [];
}

const initialState : TransactionState = {
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
  allTransfer: []
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
      })

      // fetch transactions 
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.allTransfer = action.payload;
        // Update the state with the fetched data
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
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