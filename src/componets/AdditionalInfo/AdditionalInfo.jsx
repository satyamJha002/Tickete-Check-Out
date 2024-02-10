import React from "react";
import styled from "styled-components";
import PaymentMode from "../PaymentMode/PaymentMode";

const AdditionalInfo = () => {
  return (
    <>
      <Frame5>
        <h3 className="heading">Additional Info</h3>
        <p className="description">
          We need a few more details to complete your reservation.
        </p>
        <Frame6>
          <input
            type="text"
            placeholder="Input label"
            className="input-label"
            required
          />
          <select name="option" className="select">
            <option value="select" className="option">
              Select
            </option>
          </select>
        </Frame6>
        <Frame7>
          <select name="" className="select">
            <option value="multiselect" className="option">
              Multiselect
            </option>
          </select>
        </Frame7>

        <hr style={{ width: "792px", marginTop: "32px", color: "#DDDDE3" }} />
        <PaymentMode />
      </Frame5>
    </>
  );
};

const Frame5 = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 64px;
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

const Frame6 = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  .input-label {
    width: 384px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .input-label::placeholder {
    color: #7e808a;
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

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
`;

const Frame7 = styled.div`
  .select {
    width: 792px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
    margin-top: 24px;
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
`;

export default AdditionalInfo;
