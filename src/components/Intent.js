import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";
import { intentMap } from "../utils/constants";

const Intent = () => {
  const { rowData } = useTableContext();

  const renderValue = intentMap[rowData.intent];

  return (
    <Wrapper>
      <p className="title">Intent</p>
      <Rounded bg={renderValue.color}>{renderValue.type}</Rounded>
      <p>{renderValue.hoverText}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-radius: 10px;

  padding: 1rem;
  margin-bottom: 1rem;
  -webkit-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 7px 34px -10px rgba(0, 0, 0, 0.5);
  /* .rounded {
    display: inline-block;
    border-radius: 10px;
    padding: 0.3rem 0.8rem;
    background-color: ${(props) => props.bg || "green"};

    color: white;
    margin: 1rem 0;
  } */

  .title {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Rounded = styled.div`
  display: inline-block;
  border-radius: 10px;
  padding: 0.3rem 0.8rem;
  background-color: ${(props) => props.bg.bg || "green"};

  color: ${(props) => props.bg.text || "green"};
  margin: 1rem 0;
`;

export default Intent;
