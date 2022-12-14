import React from "react";
import styled from "styled-components";
import Cpc from "./Cpc";
import Intent from "./Intent";
import KeywordBox from "./KeywordBox";
import Results from "./Results";
import VolumeBox from "./VolumeBox";
const TopBox = () => {
  return (
    <Wrapper>
      <div className="left-box">
        <VolumeBox></VolumeBox>
        <hr />
        <KeywordBox></KeywordBox>
      </div>

      <div className="right-box">
        <Intent></Intent>
        <Results></Results>
        <Cpc></Cpc>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  .left-box {
    border-radius: 15px;
    /* border: 1px solid black; */
    padding: 2rem;
    -webkit-box-shadow: 2px -2px 27px -4px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 2px -2px 27px -4px rgba(0, 0, 0, 0.41);
    box-shadow: 2px -2px 27px -4px rgba(0, 0, 0, 0.41);
  }

  .right-box {
    border-radius: 15px;
  }
`;

export default TopBox;
