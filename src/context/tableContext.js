import React, { useContext, useState } from "react";
import { tableData } from "../utils/constants";

const TableContext = React.createContext();

export const TableProvider = ({ children }) => {
  
  const [dataState, setDataState] = useState();

  const [rowData, setRowData] = useState(tableData.raw_related_data[0]);

  const handleSubmit = (value) => {
    setDataState(value);
  };

  const handleRowData = (data) => {
    setRowData(data);
  };

  return (
    <TableContext.Provider
      value={{
        handleSubmit,
        dataState,
        handleRowData,
        rowData,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  return useContext(TableContext);
};
