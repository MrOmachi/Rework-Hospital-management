import React, { ReactNode } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { NavLink } from 'react-router-dom';


type DataItem = {
  Date: string;
  Recipient: string;
  Description: string;
  Type: string;
  Amount: string;
  Status: string;
  id: string;
}

export const TransferColumn: TableColumn<DataItem>[] = [
  {
    name: "Date",
    selector: (row) => row.Date,
    cell: (row) => (
        <span className="">{`${row.Date}`}</span>
    ),
    sortable: true,
    reorder: true,
    omit: false,

  },
  {
    name: "Recipient",
    selector: (row) => row.Recipient,
    cell: (row) => (
        <span className="font-medium">{`${row.Recipient}`}</span>
    ),
    sortable: true,
    reorder: true,
    omit: false,

  },
  {
    name: "Description",
    selector: (row) => row.Description,
    cell: (row) => (
        <span className="">{`${row.Description}`}</span>
    ),
    sortable: true,
    reorder: true,
    width:"250px", 
    omit: false,


  },
  {
    name: "Type",
    selector: (row) => row.Type,
    cell: (row) => (
      <div className="">
        <span className="">{`${row.Type}`}</span>
      </div>
    ),
    sortable: true,
    center: false,
    reorder: true,
    omit: false,

  },
  {
    name: "Amount",
    selector: (row) => row.Amount,
    cell: (row) => (
      <div className="">
        <span className="font-medium">{`${row.Amount}`}</span>
      </div>
    ),
    sortable: true,
    center: false,
    reorder: true,
    width:"100px", 
    omit: false,


  },
  {
    name: "Status",
    selector: (row) => row.Status,
    cell: (row) =>
      row.Status === "Completed" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DEF7EC] text-[#03543F] font-medium flex items-center">
            <span>{row.Status}</span>
          </span>
        </div>
      ) : 
      row.Status === "In Transmit" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#EBFBFE] text-[#1892D7] font-medium flex items-center">
            <span>{row.Status}</span>
          </span>
        </div>
      ) :
      row.Status === "Pending" ? (
        <div className="py-1">
          <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DFDFDF] text-[#2C2C2C] font-medium flex items-center">
            <span>{row.Status}</span>
          </span>
        </div>
      ) :
      (
        <div className="py-1">
          <span className="flex items-center px-3 py-1 my-2 font-medium capitalize bg-[#FDE8E8] rounded-full text-[#9B1C1C]">
            <span>{row.Status}</span>
          </span>
        </div>
        
      ),
    sortable: true,
    reorder: true,
    width:"110px", 
    omit: false,

  }
];


