import { configureStore } from '@reduxjs/toolkit'
import linkedAccountReducer from './slices/linkedAccounts/linkedAccountSlice'
import fetchTokenSlice from './slices/linkedAccounts/fetchTokenSlice'

export const store = configureStore({
  reducer: {
    linkedAccount: {...linkedAccountReducer, ...fetchTokenSlice},
  },
})