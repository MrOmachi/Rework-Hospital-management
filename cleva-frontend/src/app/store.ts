import { Transition } from '@headlessui/react';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transactionReducer from '../features/Transanctions/TransanctionSlice';
import kycSlice from "../features/KycSlice/kycSlice";
import accountSlice from '../features/Accounts/AccountSlice';

import { setupListeners } from "@reduxjs/toolkit/query";


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

