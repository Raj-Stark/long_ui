import React from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useTableContext } from "../context/tableContext";

const KeywordBox = () => {
  const { rowData } = useTableContext();

  const keywordDifficulty = (value) => {
    if (value > 85) {
      return {
        rating: "Very hard",
        text: "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
        color: "#D1002F",
      };
    } else if (value >= 70) {
      return {
        rating: "Hard",
        text: "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
        color: "#FF4953",
      };
    } else if (value >= 50) {
      return {
        rating: "Difficult",
        text: "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
        color: "#FF8C43",
      };
    } else if (value >= 30) {
      return {
        rating: "Possible",
        text: "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
        color: "#FDC23C",
      };
    } else if (value >= 15) {
      return {
        rating: "Easy",
        text: "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
        color: "#59DDAA",
      };
    } else {
      return {
        rating: "Very easy",
        text: "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
        color: "#009F81",
      };
    }
  };

  const renderValue = keywordDifficulty(rowData.keyword_difficulty);

  console.log(typeof renderValue.color);

  return (
    <Wrapper>
      <p className="title">Keyword Difficulty</p>
      <div className="progress-box">
        <h1>{rowData.keyword_difficulty}%</h1>

        <div style={{ width: "68px", height: "60px" }}>
          <CircularProgressbar
            value={rowData.keyword_difficulty}
            text={`${rowData.keyword_difficulty}%`}
            strokeWidth={15}
            styles={{
              background: {
                fill: parseInt(renderValue.color),
              },
            }}
          />
        </div>
      </div>

      <p>{renderValue.rating}</p>
      <p>{renderValue.text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 2rem;

  .progress-box {
    height: 5rem;
    display: flex;
    gap: 2rem;

    margin-top: 1rem;
    h1 {
      display: inline-block;
    }
  }

  .title {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default KeywordBox;
