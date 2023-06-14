export interface FormData {
  RecipientFirstName: string;
  RecipientLastName: string;
  amount: any;
  fee: number;
  totalAmount: number;
  description: string;
  AccountNumber: string;
  bankName: string;
  RecipientIdentifier:string;
}


export enum FormActionTypes {
  SUBMIT_FORM = 'SUBMIT_FORM',
  POST_FORM_SUCCESS = 'POST_FORM_SUCCESS',
  POST_FORM_FAILURE = 'POST_FORM_FAILURE',
}

interface SubmitFormAction {
  type: FormActionTypes.SUBMIT_FORM;
  payload: FormData;
}

interface PostFormSuccessAction {
  type: FormActionTypes.POST_FORM_SUCCESS;
  payload: any; // Adjust the payload type based on the response data
}

interface PostFormFailureAction {
  type: FormActionTypes.POST_FORM_FAILURE;
  payload: string;
}

export type FormAction =
  | SubmitFormAction
  | PostFormSuccessAction
  | PostFormFailureAction;
