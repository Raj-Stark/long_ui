import styled from "styled-components";
import DataSwitcher from "./components/DataSwitcher";
import Navbar from "./components/Navbar";
import TableComp from "./components/TableComp";
import TopBox from "./components/TopBox";
import "normalize.css";

function App() {
  return (
    <Wrapper className="App">
      <Navbar></Navbar>
      <section className="main-section">
        <TopBox></TopBox>
        <DataSwitcher></DataSwitcher>
        <TableComp></TableComp>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1400px;
  height: 100%;

  margin: 0 auto;
  background-color: #fff;

  .main-section {
    max-width: 960px;
    margin: 0 auto;
  }
`;

export default App;
