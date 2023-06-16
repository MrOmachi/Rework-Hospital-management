import { ITransaction } from './../../components/model';
import { postTransaction, fetchTransactions, fetchRecipients, fetchTransactionById, cancelTransfer, fetchRates } from './transactionApi';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../app/store';
import axios from "axios";

interface TransactionState {
  RecipientFirstName: string;
  RecipientLastName: string;
  transactionDetails?: string;
  fee: any;
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
  TransactionID: string;
  status: string;
  rates: any[];
  receiveAmount:number;
  sendAmount:any;

}

const initialState : TransactionState = {
  RecipientFirstName: "",
  RecipientLastName: "",
  transactionDetails: "",
  fee: 0,
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
  exchangeRate: 0,
  TransactionID: "",
  status: "",
  rates: [],
  sendAmount: 0,
  receiveAmount: 0,
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
    setSendAmount: (state, action: PayloadAction<number>) => {
      state.sendAmount = action.payload;
    },
    setFee: (state, action: PayloadAction<number>) => {
      state.fee = action.payload;
    },
    setReceiveAmount: (state, action: PayloadAction<number>) => {
      state.receiveAmount = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTotalAmount: (state) => {
      state.totalAmount = state.sendAmount + state.fee;
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

    updateTransactionStatus: (
      state,
      action: PayloadAction<{ transactionID: string; TransactionState: string }>
    ) => {
      const { transactionID, TransactionState } = action.payload;
      const checkTransfer = state.singleTransfer;
          console.log(checkTransfer)
          const transaction = Array.isArray(checkTransfer)
            ? checkTransfer.find((t: any) => t.TransactionIdentifier === transactionID)
            : null;

          if (transaction) {
            transaction.TransactionState = TransactionState;
          }
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
        // console.log('my transfer', state.singleTransfer)
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

        // Handle the cancelTransaction action
        builder.addCase(cancelTransfer.pending, (state) => {
          // Handle pending state
        })
    
        builder.addCase(cancelTransfer.fulfilled, (state, action) => {
          const { TransactionIdentifier } = action.meta.arg;
          console.log("trans", TransactionIdentifier)
          const checkTransfer = state.singleTransfer;
          console.log(checkTransfer)
          const transaction = Array.isArray(checkTransfer)
            ? checkTransfer.find((t: any) => t.TransactionIdentifier === TransactionIdentifier)
            : null;

          if (transaction) {
            transaction.TransactionState = 'Cancelled';
          }
        });
    
        builder.addCase(cancelTransfer.rejected, (state, action) => {
          // Handle rejected state
        })

         // fetch Rates
         .addCase(fetchRates.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchRates.fulfilled, (state, action) => {
          state.loading = false;
          state.rates = action.payload;
        })
        .addCase(fetchRates.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })

  },

  
  
});



export const {
  setRecipientFirstName,
  setRecipientLastName,
  setTransactionDetails,
  setSendAmount,
  setFee,
  setTotalAmount,
  setReceiveAmount,
  setDescription,
  setAccountNumber,
  setBankName,
  setRecipientIdentifier,
  setExchangeRate,
  setSingleTransfer,
  setAllTransfer,
  setError,
  setLoading,
  updateTransactionStatus
} = transactionSlice.actions;


export default transactionSlice.reducer;


// export const updateTransaction = (transaction: any): AppThunk => async (dispatch) => {
//   dispatch(setLoading(true));

//   try {
//     // Assuming the response contains the updated transaction data
//     const updatedTransaction = cancelTransfer;

//     // Dispatch the necessary actions to update the state
//     dispatch(setSingleTransfer(updatedTransaction)); // Update the singleTransfer with the updated transaction data

//     // Update the transaction state to "Cancelled"
//     const updatedTransactionWithState = {
//       ...updatedTransaction,
//       transactionState: 'Cancelled',
//     };
//     dispatch(setAllTransfer([updatedTransactionWithState, ...transaction.allTransfer])); // Update the allTransfer array with the updated transaction

//     dispatch(setLoading(false));
//   } catch (error:any) {
//     dispatch(setError(error.message));
//     dispatch(setLoading(false));
//   }
// };