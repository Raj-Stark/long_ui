import React, { useState } from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";
import { tableData } from "../utils/constants";

const DataSwitcher = () => {
  const data = [
    {
      name: tableData.raw_broadmatch_data,
      value: "Broad Match ",
    },
    {
      name: tableData.raw_related_data,
      value: "Raw Data",
    },
    {
      name: tableData.raw_question_data,
      value: "Raw Question",
    },
  ];

  const { handleSubmit } = useTableContext();

  const handleClick = (value, item) => {
    handleSubmit(value);
  };

  return (
    <Wrapper>
      {data.map((item, i) => {
        return (
          <button key={i} onClick={(item) => handleClick(data[i].name, item)}>
            {item.value}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30rem;
  margin: 1rem 0rem;
  display: flex;

  .active {
    background: red;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0.3rem;
    border-radius: 15px;
    border: 1px solid green;
    transition: all 0.5s ease-in-out;

    &:hover {
      background: green;
      border: transparent;
      color: #fff;
    }
  }
`;

export default DataSwitcher;
