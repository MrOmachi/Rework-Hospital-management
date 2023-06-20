export interface ITransaction {
  SenderFirstName: string;
  SenderLastName: string;
  RecipientFirstName: string;
  RecipientLastName: string;
  transactionDetails?: string;
  // amount: any;
  // convertedAmount: number;
  fee: number;
  totalAmount: number;
  description: string;
  AccountNumber: string;
  bankName: string;
  RecipientIdentifier:string;
  receiveAmount:number;
  sendAmount:any;
  exchangeRate:number;

}