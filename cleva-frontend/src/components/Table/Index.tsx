import React, { useMemo, useState } from "react";
import DataTable, { IDataTableProps } from "react-data-table-component";
import SortIcon from "../../img/icons/arrow-up.svg";
import SearchTable from "./SearchTable";
import HeaderTitle from "./HeaderTitle";
import HeaderAction from "./HeaderAction";
import ExportBtn from "../Buttons/ExportButton";

interface DataItem {
  [key: string]: string | number | undefined;
}

interface IndexProps {
  data: DataItem[];
  title: string;
  searchPlaceholder: string;
  columns: IDataTableProps<DataItem>["columns"];
  userCount: number;
  countTitle: string;
  columnBtn: React.ReactNode;
}

const customStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
    },
  },
};

const Index: React.FC<IndexProps> = ({
  data,
  title,
  searchPlaceholder,
  columns,
  userCount,
  countTitle,
  columnBtn,
}) => {
  const [searchVal, setSearchVal] = useState<string>("");

  const search = (rows: DataItem[] | undefined) => {
    return rows?.filter(
      (row) =>
        JSON.stringify(row)
          .toLowerCase()
          .indexOf(searchVal?.toLowerCase()) !== -1
    ) || [];
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
    let result:any;

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
      <div className="py-4">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
          className="space-y-2"
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

      <div className="pt-4 outlet">
        <DataTable<DataItem>
          className="border-y table-radius"
          responsive
          striped
          highlightOnHover
          title={<HeaderTitle title={title} userCount={userCount} countTitle={countTitle} />}
          actions={<HeaderAction actionMemo={actionsMemo} columnBtn={columnBtn} />}
          columns={columns}
          data={search(data)}
          defaultSortFieldId={1}
          sortIcon={<img src={SortIcon} alt="sortIcon" />}
          pagination
          selectableRows
          customStyles={customStyles}
        />
      </div>
    </>
  );
};

export default Index;
