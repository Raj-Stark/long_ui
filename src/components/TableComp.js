import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";
import { columnNames, tableData } from "../utils/constants";

const TableComp = () => {
  const { dataState, handleRowData } = useTableContext();

  const columns = useMemo(() => columnNames, []);
  const data = useMemo(
    () => dataState || tableData.raw_related_data,
    [dataState]
  );

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleClick = (data) => {
    handleRowData(data);
  };
  return (
    <Wrapper>
      <table className="table" {...getTableProps()}>
        <thead className="t-head">
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()} className="head-row">
                {headerGroup.headers.map((column) => {
                  return (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()} className="t-body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="body-row"
                onClick={() => handleClick(row.original)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="td">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding: 0 2rem; */

  .table {
    width: 100%;
    height: auto;

    /* height: 40rem; */
    text-align: left;
    border-collapse: collapse;
    border: 2px solid #000;
  }

  .t-head {
    background: green;
    color: #fff;
    height: 3rem;
    th {
      padding: 0 1rem;
    }
  }

  .t-body {
    background: #fff;
    tr {
      cursor: pointer;
    }
  }

  .body-row {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 400;

    border-bottom: 1px solid black;
  }
  .td {
    border: 1px solid black;
    height: 3rem;
    padding: 0 1rem;
  }
`;

export default TableComp;
