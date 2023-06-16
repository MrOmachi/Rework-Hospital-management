import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactDetails {
    PhoneNumber: string;
    Email: string;
}

export interface RegisteredAddress{
    StreetAddress: string;
    SecondStreetAddress?: string;
    City: string;
    Country:  string;
    StateOrTerritory:  string;
    Zipcode:  string;
    LGA: string;
}

export interface IdentificationDocument {
    DocumentNumber:  string;
    DocumentType: string;
    IssuingCountry: string;
    IssueDate: string;
    ExpirationDate: string;
}

export interface BeneficiaryOwner {
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    NationalIdentifier?: string;
    IdentificationDocument?: IdentificationDocument;
    Address?: RegisteredAddress;
    PercentageOwnership?: number;
    Document?: Document;
}

export interface Document{
    DocumentType:string;
    data:string;
    contentType:string;
    filename:string;
    size: number;
}

export interface BusinessKyc{
  BusinessName: string;
  BusinessRegistrationNumber?: string;
  Classification: string;
  KycState: string;
  CountryOfIncorporation: string;
  ContactDetails: ContactDetails;
  NationalIdentifier?: string;
  DateOfIncorporation: string;
  Type: string;
  RegisteredAddress: RegisteredAddress | undefined;
  Website?: string;
  BeneficiaryOwners: BeneficiaryOwner[];
  BusinessDocuments?: Document[];
}

interface IKycState {
  modalState: boolean;
  modalSedtDelete: boolean;
  BusinessKyc: BusinessKyc;
  KycIdentifier: string;
  closeEditModal: boolean;
}

const initialState: IKycState = {
  BusinessKyc: {
      Type: "",
      BusinessName: "",
      Classification: "",
      KycState: "",
      RegisteredAddress: undefined,
      Website: "",
      BusinessRegistrationNumber: "",
      CountryOfIncorporation: "",
      ContactDetails: {
        PhoneNumber: "",
        Email: ""
      },
      NationalIdentifier: "",
      DateOfIncorporation: "",
      BeneficiaryOwners: [{
        FirstName: "",
        LastName:  "",
        DateOfBirth:  ""
      }]
  },
  KycIdentifier: "",
  modalState: false,
  modalSedtDelete: false,
  closeEditModal: false
};

export const KycSlice = createSlice({
  name: "kycInfo",
  initialState,
  reducers: {
    setkycInfo(state, action: PayloadAction<BusinessKyc>) {
      state.BusinessKyc= action.payload;
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
    setKycIdentifier(state, action: PayloadAction<string>) {
      state.KycIdentifier = action.payload;
    }
  },
});

export const {
  setkycInfo,
  setModalState,
  setModalSedtDelete,
  setCloseEditModal,
  setKycIdentifier
} = KycSlice.actions;
export default KycSlice.reducer;
