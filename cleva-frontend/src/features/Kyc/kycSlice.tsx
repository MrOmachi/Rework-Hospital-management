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
    Zipcode?:  string;
    LGA?: string;
}

export interface IdentificationDocument {
    DocumentNumber?:  string;
    DocumentType: string;
    IssuingCountry?: string;
    IssueDate?: string;
    ExpirationDate?: string;
}

export interface BeneficiaryOwner {
    FirstName: string;
    LastName: string;
    DateOfBirth: string;
    NationalIdentifier?: string;
    IdentificationDocument: IdentificationDocument;
    Address?: RegisteredAddress;
    PercentageOwnership?: number;
    Document?: Document;
}

export interface Document{
    DocumentType:string;
    data?:string;
    contentType?:string;
    filename:string;
    status?:string;
    message?:string;
    size?: number;
}

export interface BusinessKyc{
  BusinessName: string;
  BusinessRegistrationNumber?: string;
  Classification: string;
  KycState?: string;
  CountryOfIncorporation: string;
  ContactDetails: ContactDetails;
  NationalIdentifier?: string;
  Type: string;
  RegisteredAddress: RegisteredAddress | undefined;
  Website?: string;
  BeneficialOwners: BeneficiaryOwner[];
  BusinessDocuments: Document[];
  AdditionalDetails?: Record<string, any>;
}

interface IKycState {
  modalState: boolean;
  modalSedtDelete: boolean;
  BusinessKyc: BusinessKyc;
  KycIdentifier: any;
  closeEditModal: boolean;
  index: any;
  body: any;
}

const initialState: IKycState = {
  BusinessKyc: {
      Type: "",
      BusinessName: "",
      Classification: "",
      RegisteredAddress: undefined,
      Website: "",
      BusinessRegistrationNumber: "",
      CountryOfIncorporation: "",
      ContactDetails: {
        PhoneNumber: "",
        Email: ""
      },
      NationalIdentifier: "1234",
      BeneficialOwners: [{
        FirstName: "",
        LastName: "",
        DateOfBirth:"",
        IdentificationDocument:{
          DocumentType:""
        },
        Document:{
          DocumentType:"",
          filename:""
        }
      }],
      BusinessDocuments: [{
        DocumentType: "",
        filename:""
      }]
  },
  KycIdentifier:localStorage.getItem("KycIdentifier"),
  modalState: false,
  modalSedtDelete: false,
  closeEditModal: false,
  index: 0,
  body: {}
};

export const KycSlice = createSlice({
  name: "kycInfo",
  initialState,
  reducers: {
    setkycInfo(state, action: PayloadAction<BusinessKyc>) {
      state.BusinessKyc= action.payload;
    },
    updateBeneficiaryOwner(state, action: PayloadAction<any>) {
      const options: any = action.payload;
      const owner: any = {...state.BusinessKyc.BeneficialOwners[options.index]};
      state.BusinessKyc.BeneficialOwners[options.index]={...owner,...options.body};
    },
    updateBusinessDocument(state, action: PayloadAction<any>) {
      const options: any = action.payload;
      const document: any = {...state.BusinessKyc.BusinessDocuments[options.index]};
      state.BusinessKyc.BusinessDocuments[options.index]={...document,...options.body};
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
  updateBeneficiaryOwner,
  updateBusinessDocument,
  setModalState,
  setModalSedtDelete,
  setCloseEditModal,
  setKycIdentifier
} = KycSlice.actions;
export default KycSlice.reducer;
