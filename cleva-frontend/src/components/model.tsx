export interface ITransaction {
  RecipientFirstName: string;
  RecipientLastName: string;
  transactionDetails?: string;
  amount: any;
  convertedAmount: number;
  fee: number;
  totalAmount: number;
  description: string;
  AccountNumber: string;
  bankName: string;
  RecipientIdentifier:string;

}