import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getPlaidLinkToken} from "../../../API"

export const fetchToken = createAsyncThunk(
  'linkAccoutn/linkToken',
  getPlaidLinkToken
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    linkToken: null,
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.linkToken = action.payload.data.linkToken;
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export default dataSlice.reducer;
