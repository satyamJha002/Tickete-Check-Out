import React from "react";
import styled from "styled-components";
import FAQ from "../FAQ/FAQ";
const PaymentMode = () => {
  return (
    <>
      <Frame8>
        <h3 className="heading">Select your mode of payment</h3>
        <p className="description">
          Payments with Tickete are secure and encrypted.
        </p>
        <Frame9>
          <Frame10>
            <Frame11>
              <img src="images/Vector3.png" alt="cedit-card-img" />
              <span>Credit card & Debit card</span>
            </Frame11>
            <img
              src="images/Vector4.png"
              alt="radio-img"
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "12px",
              }}
            />
          </Frame10>
          <Frame12>
            <img src="images/visa.png" alt="visa-logo" />
            <img src="images/mastercard.png" alt="mastercard-logo" />
            <img src="images/diners-club.png" alt="diners-club-logo" />
          </Frame12>
          <Frame13>
            <input type="text" placeholder="Name on card" className="input" />
            <input
              type="number"
              placeholder="Card number"
              className="number-input"
            />
          </Frame13>
          <Frame14>
            <input type="text" placeholder="Expiry Date" className="input" />
            <input
              type="number"
              placeholder="<CVV/CVC>"
              className="number-input"
            />
          </Frame14>
          <Frame15>
            <h3 className="heading">Total payable: $XXX</h3>
            <Frame16>
              <img src="images/Vector5.png" alt="pig-mark" />
              <span>You saved &lt;price&gt;</span>
            </Frame16>
          </Frame15>
          <Frame17>
            <p className="text">You will be charged in AED</p>
            <img src="images/Question.png" alt="i-mark" />
          </Frame17>
          <Frame18>
            <p className="text">
              By clicking “confirm & pay”, you agree to{" "}
              <a href="#">Tickete’s general terms and conditions</a> and
              <a href="#"> cancellation policy</a>.
            </p>
          </Frame18>
          <Frame19>
            <button className="button">Confirm & Pay</button>
          </Frame19>
        </Frame9>
        <Frame20>
          <Frame21>
            <img src="images/google pay.png" alt="google-pay" />
            <span>Comming Soon</span>
          </Frame21>

          <img src="images/Radio.png" alt="radio" />
        </Frame20>
        <Frame20>
          <Frame21>
            <img src="images/apple-pay-mono.png" alt="apple-pay" ss />
            <span>Comming Soon</span>
          </Frame21>

          <img src="images/Radio.png" alt="radio" />
        </Frame20>
        <hr style={{ width: "792px", marginTop: "32px", color: "#DDDDE3" }} />
        <Frame22>
          <h3 className="heading">Total Payable: $XXX</h3>
        </Frame22>

        <TextWrapp>
          <Frame23>
            <img
              src="images/Vector7.png"
              alt="i-mark"
              style={{ display: "flex", flexDirection: "row" }}
            />
            <p className="text">You will be charged in AED</p>
          </Frame23>

          <p className="description">
            The price shown here is in US Dollar (USD) as per the current
            conversion rate. You will be charged in United Arab Emirates Dirham
            (AED).
          </p>
        </TextWrapp>

        <hr style={{ width: "1200px", marginTop: "32px", color: "#DDDDE3" }} />
        <FAQ />
      </Frame8>
    </>
  );
};

const Frame8 = styled.div`
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

const Frame9 = styled.div`
  width: 792px;
  height: 538px;
  margin-top: 24px;
  padding: 20px;
  background: #f3f3f3;
  border: 1px solid #000000;
  border-radius: 16px;
`;

const Frame10 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Frame11 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
    margin-left: 10px;
  }
`;

const Frame12 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  img {
    cursor: pointer;
    border: 0.63px solid #dddde3;
    padding: 5px;
    border-radius: 4px;
  }
`;

const Frame13 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 24px;
  .input {
    width: 360px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .input::placeholder {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
  }

  .number-input {
    width: 360px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
    padding: 1% 5%;
    background-image: url(images/Vector3.png);
    background-repeat: no-repeat;
    background-position: left 10px center;
    background-size: 20px auto;
    transition: box-shadow 100ms;
  }

  .number-input::placeholder {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
  }
`;

const Frame14 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 24px;
  .input {
    width: 360px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .input::placeholder {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
  }

  .number-input {
    width: 360px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 14px;
    padding: 20px;
    outline: none;
  }

  .number-input::placeholder {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
  }
`;

const Frame15 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  border-top: 1px solid #dddde3;
  padding-top: 24px;
  .heading {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #1c2024;
  }
`;

const Frame16 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #b9bbc6;
  background-color: #299764;
  border-radius: 14px;

  span {
    font-size: 12px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #fff;
    padding: 4px 8px;
  }
`;

const Frame17 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 5px;

  .text {
    font-size: 14px;
    font-family: "Open Sans";
    font-weight: 700;
    color: #60646c;
  }
`;

const Frame18 = styled.div`
  margin-top: 24px;

  .text {
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #60646c;
  }

  .text a {
    color: #3a5ccc;
    text-decoration: none;
  }
`;

const Frame19 = styled.div`
  margin-top: 40px;

  button {
    width: 220px;
    height: 56px;
    border: 1px solid #b9bbc6;
    border-radius: 16px;
    padding: 1% 4%;
    background-image: url(images/Lock.png);
    background-repeat: no-repeat;
    background-position: left 10px center;
    font-size: 18px;
    font-weight: 700;
    background-color: black;
    color: white;
    font-family: "Open Sans";
    cursor: pointer;
  }
`;
const Frame20 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #b9bbc6;
  border-radius: 14px;
  width: 792px;
  height: 72px;
  margin-top: 24px;
  padding: 20px;
  background-color: #f9f9fb;
`;

const Frame21 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #8b8d98;
    margin-left: 10px;
  }
`;

const Frame22 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 64px;

  .heading {
    font-size: 24px;
    font-family: "Open Sans";
    line-height: 32px;
    color: #1c2024;
  }
`;

const TextWrapp = styled.div`
  border: 1px solid black;
  border-radius: 14px;
  padding: 10px;
  margin-top: 24px;
  width: 792px;
  height: 102px;

  .description {
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    color: #60646c;
    font-weight: 700;
    padding-left: 23px;
  }
`;

const Frame23 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .text {
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    padding-left: 10px;
  }
`;

export default PaymentMode;
