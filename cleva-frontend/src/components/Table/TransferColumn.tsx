import React, { ReactNode } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';


type DataItem = {
  CreatedAt: string;
  RecipientName: string;
  Description: string;
  TransactionType: string;
  Amount: string;
  TransactionState: string;
  id: string;
}

const formatAmount = (amount:any)=>{
  const parsedAmount = parseFloat(amount); // Parse the amount as a floating-point number
  const formattedAmount = parsedAmount.toFixed(2); // Format the amount with two decimal places

  return formattedAmount;
}
export const TransferColumn: TableColumn<DataItem>[] = [
  {
    name: "Date",
    selector: (row) => row.CreatedAt,
    cell: (row) => (
        <span className="">{`${row.CreatedAt.slice(0,10)}`}</span>
    ),
    sortable: true,
    reorder: true,
    omit: false,

  },
  {
    name: "Recipient",
    selector: (row) => row.RecipientName,
    cell: (row) => (
        <span className="font-medium">{`${row.RecipientName}`}</span>
    ),
    sortable: true,
    reorder: true,
    omit: false,
    // width:"220px", 

  },
  {
    name: "Description",
    selector: (row) => row.Description,
    cell: (row) => (
        <span className="">{`${row.Description}`}</span>
    ),
    sortable: true,
    reorder: true,
    // width:"220px", 
    omit: false,


  },
  {
    name: "Type",
    selector: (row) => row.TransactionType,
    cell: (row) => (
        row.TransactionType === "MAKE_PAYMENT" ? 
      <div className="">
        <span className="">International transfer</span>
      </div>
      :  <div className="">
      <span className="">Local transfer</span>
    </div>
    ),
    sortable: true,
    center: false,
    reorder: true,
    omit: false,
    width:"200px", 

  },
  {
    name: "Amount",
    selector: (row) => row.Amount,
    cell: (row) => (
      <div className="">
        <span className="font-medium text-sm">{`$${formatAmount(row.Amount)}`}</span>
      </div>
    ),
    sortable: true,
    center: false,
    reorder: true,
    width:"140px", 
    omit: false,


  },
  {
    name: "Status",
    selector: (row) => row.TransactionState,
    cell: (row) =>
      row.TransactionState === "COMPLETED" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DEF7EC] text-[#03543F] font-medium flex items-center text-[10px]">
            <span>{row.TransactionState}</span>
          </span>
        </div>
      ) : 
      row.TransactionState === "IN_TRANSIT" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#EBFBFE] text-[#1892D7] font-medium flex items-center text-[10px]">
            <span>{row.TransactionState}</span>
          </span>
        </div>
      ) :
      row.TransactionState === "PENDING" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DFDFDF] text-[#2C2C2C] font-medium flex items-center text-[10px]">
            <span>{row.TransactionState}</span>
          </span>
        </div>
      ) :
      row.TransactionState === "CANCELLED" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#FDF0E7] text-[#FF6600] font-medium flex items-center text-[10px]">
            <span>{row.TransactionState}</span>
          </span>
        </div>
      ) :
      (
        <div className="py-1">
          <span className="flex items-center px-3 py-1 my-2 font-medium capitalize bg-[#FDE8E8] rounded-full text-[#9B1C1C] text-[10px]">
            <span>{row.TransactionState}</span>
          </span>
        </div>
        
      ),
    sortable: true,
    reorder: true,
    width:"130px", 
    omit: false,

  }
];


