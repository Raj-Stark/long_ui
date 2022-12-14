import React from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const Navbar = () => {
  const { rowData } = useTableContext();
  return (
    <Wrapper>
      <p>
        Keyword Explorer {">"}
        <span> Keyword Overview</span>
      </p>
      <h1>Keyword : {rowData.keyword}</h1>
      <p>Database United States </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 8rem;
  padding: 0.5rem 1rem;
  width: 100vw;
  margin-bottom: 1rem;
  text-transform: capitalize;
  background: #ccc;
  border-bottom: 1px solid black;
  h1 {
    padding: 0;
    margin-bottom: 0.4rem;
  }
`;

export default Navbar;
