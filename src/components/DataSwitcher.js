import React, { useState } from "react";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";
import { tableData } from "../utils/constants";

const DataSwitcher = () => {
  const data = [
    {
      id: 1,
      name: tableData.raw_broadmatch_data,
      value: "Broad Match ",
    },
    {
      id: 2,
      name: tableData.raw_related_data,
      value: "Raw Data",
    },
    {
      id: 3,
      name: tableData.raw_question_data,
      value: "Raw Question",
    },
  ];

  const { handleSubmit } = useTableContext();

  const [id, setId] = useState(data[0].id);

  const handleClick = (value, e) => {
    e.preventDefault();

    setId(e.target.id);

    handleSubmit(value);
  };

  return (
    <Wrapper>
      {data.map((item, i) => {
        return (
          <ButtonWrapper
            key={item.id}
            id={item.id}
            active={Number(id) === item.id}
            onClick={(e) => handleClick(data[i].name, e)}
          >
            {item.value}
          </ButtonWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 30rem;
  margin: 1rem 0rem;
  display: flex;

  /* button {
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
  } */
`;

const ButtonWrapper = styled.button`
  background: ${(props) => (props.active ? "green" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin: 0.3rem;
  border-radius: 15px;
  border: 1px solid green;
  transition: all 0.5s ease-in-out;
`;

export default DataSwitcher;
