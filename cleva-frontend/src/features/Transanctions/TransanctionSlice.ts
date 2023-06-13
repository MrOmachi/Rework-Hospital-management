import { ITransaction } from './../../components/model';
import { postTransaction, fetchTransactions, fetchRecipients, fetchTransactionById, cancelTransfer } from './transactionApi';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import axios from "axios";

interface TransactionState {
  RecipientFirstName: string;
  RecipientLastName: string;
  transactionDetails?: string;
  amount: any;
  convertedAmount: number;
  fee: number;
  totalAmount: number;
  description: string;
  AccountNumber: string;
  bankName: string;
  RecipientIdentifier:string;
  loading: boolean;
  error: string | null;
  allTransfer: any[]; 
  allRecipients: any[]; 
  singleTransfer: any | null
  exchangeRate: number;

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
  AccountNumber: "",
  bankName: "",
  RecipientIdentifier:"",
  loading: false,
  error: null,
  allTransfer: [],
  allRecipients: [],
  singleTransfer: null,
  exchangeRate: 740,
};




const transactionSlice = createSlice({
  name: "transfer",
  initialState,
  reducers: {
    setRecipientFirstName: (state, action: PayloadAction<string>) => {
      state.RecipientFirstName = action.payload
    },
    setRecipientLastName: (state, action: PayloadAction<string>) => {
      state.RecipientLastName = action.payload
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
      state.AccountNumber = action.payload;
    },
    setBankName: (state, action: PayloadAction<string>)  => {
      state.bankName = action.payload;
    },
    setRecipientIdentifier: (state, action: PayloadAction<string>)  => {
      state.RecipientIdentifier = action.payload;
    },
    setExchangeRate: (state, action: PayloadAction<number>)  => {
      state.exchangeRate = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSingleTransfer: (state, action: PayloadAction<any | null>) => {
      state.singleTransfer = action.payload;
    },
    setAllTransfer: (state, action: PayloadAction<any[]>) => {
      state.allTransfer = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
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
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // fetch single transaction 
      .addCase(fetchTransactionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleTransfer = action.payload;
        console.log('my transfer', state.singleTransfer)
        // Update the state with the fetched data
      })
      .addCase(fetchTransactionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })


        // fetch Recipients 
        .addCase(fetchRecipients.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchRecipients.fulfilled, (state, action) => {
          state.loading = false;
          state.allRecipients = action.payload;
        })
        .addCase(fetchRecipients.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
  },
  
});



export const {
  setRecipientFirstName,
  setRecipientLastName,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
  setAccountNumber,
  setBankName,
  setRecipientIdentifier,
  setExchangeRate,
  setSingleTransfer,
  setAllTransfer,
  setError,
  setLoading
} = transactionSlice.actions;


export default transactionSlice.reducer;


export const updateTransaction = (transaction: any): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Assuming the response contains the updated transaction data
    const updatedTransaction = cancelTransfer;

    // Dispatch the necessary actions to update the state
    dispatch(setSingleTransfer(updatedTransaction)); // Update the singleTransfer with the updated transaction data

    // Update the transaction state to "Cancelled"
    const updatedTransactionWithState = {
      ...updatedTransaction,
      transactionState: 'Cancelled',
    };
    dispatch(setAllTransfer([updatedTransactionWithState, ...transaction.allTransfer])); // Update the allTransfer array with the updated transaction

    dispatch(setLoading(false));
  } catch (error:any) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};