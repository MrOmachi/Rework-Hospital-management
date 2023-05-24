export interface TransferProps {
  id: number;
  firstName: string;
  lastName: string;
  amount: number;
  sent: number;
  phone: string;
  email: string;
  transaction_type: string;
  source: string;
  sourcee: string;
  destination: string;
  destinationn: string;
  type: string;
  typee: string;
  status: string;
  dest_acct: string;
  dest_name: string;
  date: string;
  time: string;
  [key: string]: string | number;
}