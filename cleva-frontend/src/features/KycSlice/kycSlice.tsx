import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface kycInfo {
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
export interface kycInfoNonSole {
  firstName: string;
  lastName: string;
  DoB: string;
  email: string;
  beneficialAddress: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}

interface IKycState {
  modalState: boolean;
  modalSedtDelete: boolean;
  kycInfo: kycInfo;
  closeEditModal: boolean;
  kycStatus: string;
  kycInfoNonSole: kycInfoNonSole;
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
  kycInfoNonSole: {
    firstName: "",
    lastName: "",
    DoB: "",
    email: "",
    beneficialAddress: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  modalState: false,
  modalSedtDelete: false,
  closeEditModal: false,
  kycStatus: "",
};

export const KycSlice = createSlice({
  name: "kycInfo",
  initialState,
  reducers: {
    setkycInfo(state, action: PayloadAction<kycInfo>) {
      state.kycInfo = action.payload;
    },
    setkycInfoNonSole(state, action: PayloadAction<kycInfoNonSole>) {
      state.kycInfoNonSole = action.payload;
    },
    setModalState(state, action) {
      state.modalState = action.payload;
    },
    setModalSedtDelete(state, action: PayloadAction<boolean>) {
      state.modalSedtDelete = action.payload;
    },
    setCloseEditModal(state, action: PayloadAction<boolean>) {
      state.closeEditModal = action.payload;
    },
    setKycStatus(state, action: PayloadAction<string>) {
      state.kycStatus = action.payload;
    },
  },
});

export const {
  setkycInfo,
  setkycInfoNonSole,
  setModalState,
  setModalSedtDelete,
  setCloseEditModal,
  setKycStatus,
} = KycSlice.actions;
export default KycSlice.reducer;
