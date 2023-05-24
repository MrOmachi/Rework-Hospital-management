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
    cell: (row) => (
        <span className="">{`${row.Date}`}</span>
    ),
    sortable: true,
    reorder: true,
  },
  {
    name: "Recipient",
    cell: (row) => (
        <span className="font-medium">{`${row.Recipient}`}</span>
    ),
    sortable: true,
    reorder: true,
  },
  {
    name: "Destination",
    cell: (row) => (
        <span className="">{`${row.Description}`}</span>
    ),
    sortable: true,
    reorder: true,
  },
  {
    name: "Type",
    cell: (row) => (
      <div className="">
        <span className="">{`${row.Type}`}</span>
      </div>
    ),
    sortable: true,
    center: true,
    reorder: true,
  },
  {
    name: "Amount",
    cell: (row) => (
      <div className="">
        <span className="font-medium">{`${row.Amount}`}</span>
      </div>
    ),
    sortable: true,
    center: true,
    reorder: true,
  },
  {
    name: "Status",
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
  },
 
  {
    name: " ",
    button: true,
    cell: (row) => (
      <NavLink
        to={`/transactions/${row.id}`}
        className="font-medium btn border text-xs py-1 px-5 rounded-lg"
        rel="noopener noreferrer"
      >
        View
      </NavLink>
    ),
    center: true,
    reorder: true,
  },
];
