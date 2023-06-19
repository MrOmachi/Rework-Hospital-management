import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transactionReducer from '../features/Transanctions/TransanctionSlice';
import accountSlice from '../features/Accounts/AccountSlice';

import { setupListeners } from "@reduxjs/toolkit/query";

import kycSlice from "../features/Kyc/kycSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    kycInfo: kycSlice,
    account: accountSlice,
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

