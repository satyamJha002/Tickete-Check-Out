import React from "react";
import styled from "styled-components";
import Details from "../Details/Details";
import BookingSummary from "../BookingSummary/BookingSummary";

const ConfirmPay = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Roboto Serif",
          fontSize: "57px",
          padding: "12px",
          lineHeight: "64px",
          marginTop: "32px",
        }}
      >
        Confirm & payment
      </h1>
      <Container>
        <Box1>
          <Details />
        </Box1>
        <Box2>
          <BookingSummary />
        </Box2>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`;

const Box1 = styled.div`
  width: 792px;
  height: 210px;
  margin-right: 220px;
`;

const Box2 = styled.div`
  width: 384px;
  height: 866px;
  margin-top: 32px;
  margin-left: 80px;
`;

export default ConfirmPay;
