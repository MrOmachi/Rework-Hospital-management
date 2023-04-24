import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  linkAcctErrorMsg: null,
  linkAcctSuccessMsg: null,
  isPlaidLinkReady: false,
};

export const linkedAccountSlice = createSlice({
  name: "linkedAccount",
  initialState,
  reducers: {
    changeLinkToken: (state, action) => {
      state.linkToken = action.payload;
    },
    showSuccess: (state, action) => {
      state.linkAcctSuccessMsg = action.payload;
      setTimeout(() => {
        state.linkAcctSuccessMsg=null;
      }, 2000)
    },
    showError: (state, action) => {
        state.linkAcctErrorMsg = action.payload;
        setTimeout(() => {
          state.linkAcctErrorMsg=null;
        }, 2000)
    },
  },
  extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByAmount } = linkedAccountSlice.actions;

export default linkedAccountSlice.reducer;
