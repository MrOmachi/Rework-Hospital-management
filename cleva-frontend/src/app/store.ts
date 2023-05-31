import { Transition } from '@headlessui/react';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import transactionReducer from '../features/Transanctions/TransanctionSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transaction: transactionReducer,

    // auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
