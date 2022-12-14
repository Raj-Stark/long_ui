import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const Intent = () => {
  const { rowData } = useTableContext();
  const intentMap = {
    0: {
      type: "Commercial",
      hoverText: "The user wants to investigate brands or services.",
      color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
    },
    1: {
      type: "Informational",
      hoverText: "The user wants to find an answer to a specific question.",
      color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
    },
    2: {
      type: "Navigational",
      hoverText: "The user wants to find a specific page or site.",
      color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
    },
    3: {
      type: "Transactional",
      hoverText: "The user wants to complete an action (conversion).",
      color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
    },
  };

  const renderValue = intentMap[rowData.intent];

  console.log(renderValue.color);

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
