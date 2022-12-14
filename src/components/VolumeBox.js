import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const VolumeBox = () => {
  const { rowData } = useTableContext();

  return (
    <Wrapper>
      <p className="title">Volume</p>
      <h1>{rowData?.volume}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin: 0;

  .title {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default VolumeBox;
