import React, { useMemo, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import SearchTable from "./SearchTable";
import HeaderTitle from "./HeaderTitle";
import HeaderAction from "./HeaderAction";
import ExportBtn from "../buttons/ExportButton";
import SortIcon from "../../images/arrow-upp.svg"
// import {  TransferProps } from "../model";


interface DataItem {
  [key: string]: string | number | boolean; // Add index signature
  
}
interface IndexProps {
  data: any;
  title: string;
  searchPlaceholder: string;
  // userCount: number;
  TableColumns: any;
  onClickTable:() => void;
}

const customStyles = {
  rows: {
    style: {
      minHeight: "56px", // override the row height
      padding: "2px",
      cursor:"pointer"
    },
  },
};

const Index: React.FC<IndexProps> = ({
  data,
  title,
  searchPlaceholder,
  TableColumns,
  onClickTable
  // userCount,
}) => {
  const [searchVal, setSearchVal] = useState<string>("");

  // const search = (rows: DataItem[] | undefined) => {
  //   return rows?.filter(
  //     (row) =>
  //       JSON.stringify(row)
  //         .toLowerCase()
  //         .indexOf(searchVal?.toLowerCase()) !== -1
  //   ) || [];
  // };

  const search = (rows: DataItem[]) => {
    return rows?.filter(
      (row) =>
        JSON.stringify(row).toLowerCase().indexOf(searchVal?.toLowerCase()) !== -1 
        // row.lastName?.toLowerCase().indexOf(searchVal?.toLowerCase()) !== -1
    );
  };

 
  function downloadCSV(tableArray: DataItem[]) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(tableArray);
    if (csv == null) return;

    const filename = `${title}.csv`;

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }

  function convertArrayOfObjectsToCSV(myArray: DataItem[]) {
    let result:string;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(myArray[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    myArray.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  const actionsMemo = useMemo(() => <ExportBtn onExport={() => downloadCSV(data)} />, []);

  return (
    <>
      <div className="pt-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
          className="space-y-1"
        >
          <div className="w-full md:w-[35%]">
            <SearchTable
              SearchTable={(e) => setSearchVal(e.target.value)}
              filteredText={searchVal}
              placeholder={searchPlaceholder}
            />
          </div>
        </div>
      </div>

      <div className="pt-2 outlet">
        <DataTable
          className="border-y table-radius"
          responsive
          highlightOnHover
          title={<HeaderTitle title={title}  />}
          actions={<HeaderAction actionMemo={actionsMemo} />}
          columns={TableColumns}
          data={search(data)}
          defaultSortFieldId={3}
          defaultSortAsc={false}
          // sortIcon={<img src={SortIcon} alt="sortIcon" className="ml-1" />}
          pagination
          selectableRows
          customStyles={customStyles}
          onRowClicked={onClickTable}
        />
      </div>
    </>
  );
};

export default Index;
