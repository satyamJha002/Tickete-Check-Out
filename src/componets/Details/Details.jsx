import React from "react";
import styled from "styled-components";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo";

const Details = () => {
  return (
    <>
      <Container>
        <SectionMessage>
          <Content>
            <p className="text">Free cancellation</p>
            <p className="description">
              Ticketes can be cancelled by 13th December, 2022.
            </p>
          </Content>

          <CloseBtn>
            <img src="images/Vector.png" alt="i-mark" className="i-logo" />
          </CloseBtn>
        </SectionMessage>
        <Frame1>
          <h3 className="heading">Enter your details</h3>
          <p className="description">
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </Frame1>
        <Frame2>
          <input
            type="text"
            placeholder="Full name"
            className="input"
            required
          />
          <Frame3>
            <select name="option" className="select">
              <option value="" className="option">
                {" "}
                🌎 Country
              </option>
            </select>
            <input type="number" placeholder="Phone number" className="phone" />
          </Frame3>
          <Frame4>
            <input
              type="text"
              placeholder="Email address"
              className="email"
              required
            />
            <input
              type="text"
              placeholder="Confirm Email address"
              className="confirm-email"
              required
            />
          </Frame4>
        </Frame2>
        <hr style={{ width: "792px", marginTop: "32px", color: "#DDDDE3" }} />
        <AdditionalInfo />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
  margin: calc(80px - 16px);
`;

const SectionMessage = styled.div`
  width: 792px;
  height: 82px;
  border: 1px solid #d3d4db;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 12px;
`;

const Content = styled.div`
  .text {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #1c2024;
  }

  .description {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #60646c;
  }
`;

const CloseBtn = styled.div`
  .i-logo {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Frame1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .heading {
    font-size: 24px;
    font-family: "Open Sans";
    line-height: 32px;
    color: #1c2024;
  }

  .description {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    color: #60646c;
    margin-top: 12px;
    font-weight: 700;
  }
`;

export const Frame2 = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input {
    width: 792px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .input::placeholder {
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

  .input:focus {
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    outline: none;
    box-shadow: 0 0 0 1px #b9bbc6;
    transition: 0.3s;
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }
`;

const Frame3 = styled.div`
  display: flex;
  gap: 24px;

  .select {
    width: 384px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .option {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

  option:focus {
    border: 1px solid #b9bbc6;
    border-radius: 14px;
  }

  .phone {
    width: 384px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .phone::placeholder {
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }
`;

const Frame4 = styled.div`
  display: flex;
  gap: 24px;

  .email {
    width: 384px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .email::placeholder {
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

  .confirm-email {
    width: 384px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .confirm-email::placeholder {
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }
`;

export default Details;
