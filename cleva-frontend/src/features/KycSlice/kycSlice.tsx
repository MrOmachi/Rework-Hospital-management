import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface kycInfo {
  BusinessType: string;
  businessName: string;
  businessClassification: string;
  employerID: string;
  businessAddress: string;
  StreetAddress: string;
  SecondStreetAddress: string;
  City: string;
  StateOrTerritory: string;
  Zipcode: string;
  PhoneNumber: string;
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  DoB: string;
}

interface KycState {
  kycInfo: kycInfo;
}

const initialState: KycState = {
  kycInfo: {
    BusinessType: "",
    businessName: "",
    businessClassification: "",
    employerID: "",
    businessAddress: "",
    StreetAddress: "",
    SecondStreetAddress: "",
    City: "",
    StateOrTerritory: "",
    Zipcode: "",
    PhoneNumber: "",
    website: "",
    firstName: "",
    lastName: "",
    email: "",
    DoB: "",
  },
};

export const KycSlice = createSlice({
  name: "kycInfo",
  initialState,
  reducers: {
    setkycInfo(state, action: PayloadAction<kycInfo>) {
      state.kycInfo = action.payload;
    },
  },
});

export const { setkycInfo } = KycSlice.actions;
export default KycSlice.reducer;
