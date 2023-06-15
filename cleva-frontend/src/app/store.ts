import { configureStore, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import kycSlice from "../redux/Kyc/kycSlice";

export const store = configureStore({
  reducer: {
    kycInfo: kycSlice,
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
