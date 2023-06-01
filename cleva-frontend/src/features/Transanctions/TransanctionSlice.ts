import { createSlice, createAsyncThunk, PayloadAction , AnyAction} from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import axios from 'axios';

interface TransactionState {
  recipient: string;
  transactionDetails?: string;
  amount: any;
  convertedAmount: number;
  fee: number;
  totalAmount: number;
  description?: string;
  accountNumber?: string;
  bankName?: string;
  loading?: boolean;
  error?: string | null
}

const initialState: TransactionState = {
  recipient: "",
  transactionDetails: "",
  amount: "",
  convertedAmount:0,
  fee: 10,
  totalAmount: 0,
  description: "",
  accountNumber: "",
  bankName: "",
  loading: false,
  error: null,

};


// Define your async thunk action to make the post request

export const postTransaction = createAsyncThunk<any, TransactionState>(
  'transactions/createTransaction',
  async (transactionData: TransactionState, { rejectWithValue }) => {
    try {
      // Make the POST request to the backend API
      const response = await axios.post('/api/transactions', transactionData);

      // Return the response data
      return response.data;
    } catch (error:any) {
      // Return the error message
      return rejectWithValue(error.message);
    }
  }
);
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
        // Reset the form or clear the state as needed
        state.amount = 0;
        state.description = '';
        state.recipient = '';
        state.transactionDetails = '';
        // state.transactionDetails = '';
        state.totalAmount = 0;
      })
      .addCase(postTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
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