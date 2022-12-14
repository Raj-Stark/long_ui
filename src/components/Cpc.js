import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const Cpc = () => {
  const { rowData } = useTableContext();
  return (
    <Wrapper>
      <div>
        <p className="title">CPC</p>
        <h1>${rowData.cpc}</h1>
      </div>

      <div>
        <p className="title">Com</p>
        <h1>{rowData.competetion}</h1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-radius: 10px;
  -webkit-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  gap: 15rem;

  .title {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default Cpc;
