import React from "react";
import styled from "styled-components";
import ConfirmPay from "./componets/ConfirmPay/ConfirmPay";
import Footer from "./componets/Footer/Footer";
function App() {
  return (
    <>
      <Container>
        <Header>
          <ul>
            <li>
              <img src="images/Logo.png" alt="logo" />
            </li>
            <li>
              <img src="images/Lock.png" alt="lock-img" />
              <span>Checkout</span>
            </li>
            <li>
              <img src="images/Question.png" alt="questions-img" />
              <span>Help</span>
            </li>
          </ul>
        </Header>
        <Header2>
          <p className="text">Holding your tickets for 30:00 </p>
        </Header2>
      </Container>
      <ConfirmPay />
    </>
  );
}

const Container = styled.div`
  height: 100%;
  font-family: "Open Sans";

  @media screen and (max-width: 768px) {
  }
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 10px;
    padding: 20px 20px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  li span {
    font-size: 16px;
    font-weight: 600;
    color: #60646c;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 10px;
      padding: 20px 20px;
    }
  }
`;

const Header2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  p {
    color: white;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 20px;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }
`;

export default App;
