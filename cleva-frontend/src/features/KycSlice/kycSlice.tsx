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

interface IKycState {
  modalState: boolean;
  modalSedtDelete: boolean;
  kycInfo: kycInfo;
}

const initialState: IKycState = {
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
  modalState: false,
  modalSedtDelete: false,
};

export const KycSlice = createSlice({
  name: "kycInfo",
  initialState,
  reducers: {
    setkycInfo(state, action: PayloadAction<kycInfo>) {
      state.kycInfo = action.payload;
    },
    setModalState(state, action) {
      state.modalState = action.payload;
    },
    setModalSedtDelete(state, action: PayloadAction<boolean>) {
      state.modalSedtDelete = action.payload;
    },
  },
});

export const { setkycInfo, setModalState, setModalSedtDelete } =
  KycSlice.actions;
export default KycSlice.reducer;
