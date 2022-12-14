import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const Results = () => {
  const { rowData } = useTableContext();
  return (
    <Wrapper>
      <p className="title">Result</p>
      <h3>{Math.ceil(rowData.numberOfResult / 1000000)} M</h3>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-radius: 10px;
  -webkit-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-bottom: 1rem;

  .title {
    font-weight: 600;
    font-size: 1rem;
  }
`;
export default Results;
