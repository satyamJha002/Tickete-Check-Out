import React from "react";
import styled from "styled-components";

const BookingSummary = () => {
  return (
    <Booking>
      {" "}
      {/* Apply the CSS class */}
      <img
        src="images/Gallery.png"
        alt="gallery"
        style={{
          width: "352px",
          height: "198px",
        }}
      />
      <Frame2>
        <p>
          <img src="images/star.png" alt="star-img" />
          <span>5.0</span>
          <span className="rate">(4.5k).&lt;category&gt;</span>
        </p>
        <Frame3>
          <p className="description">
            Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
            Housef
          </p>
        </Frame3>
      </Frame2>
      <Frame4>
        <img src="images/Vector8.png" alt="" />
        <span>&lt;ticket type-variant&gt;</span>
      </Frame4>
      <Frame4>
        <img src="images/Vector9.png" alt="" />
        <span>&lt;day&gt;, &lt;month&gt;, &lt;date&gt;</span>
      </Frame4>
      <p className="duration">Duration: &lt;duration&gt;</p>
      <Frame4>
        <img src="images/Vector10.png" alt="" />
        <span>&lt;time&gt;</span>
      </Frame4>
      <p className="duration">Operating hours: &lt;time&gt; to &lt;time&gt;</p>
      <Frame4>
        <img src="images/Vector11.png" alt="" />
        <span>5 guests</span>
      </Frame4>
      <hr style={{ marginTop: "32px", border: "1px dashed #DDDDE3" }} />
      <Frame5>
        <p className="payment-summary">
          <u style={{ color: "#60646c" }}>View payment summary</u>
        </p>
        <span>+</span>
      </Frame5>
      <Frame6>
        <Frame7>
          <h5 className="heading">Total payable: </h5>
          <span>$XXX</span>
        </Frame7>
        <Frame8>
          <img
            src="images/PiggyBank.png"
            alt="pig-mark"
            className="pigy-logo"
          />
          <span>You saved &lt;price&gt;</span>
        </Frame8>
        <Frame9>
          <p>You will be charged in AED</p>
          <span>
            <img src="images/Vector.png" alt="i-logo" />
          </span>
        </Frame9>
      </Frame6>
      <Frame10>
        <p className="text">
          By clicking “confirm & pay”, you agree to{" "}
          <a href="#">Tickete’s general terms and conditions</a> and
          <a href="#"> cancellation policy</a>.
        </p>
      </Frame10>
      <Frame11>
        <button className="button">Confirm & Pay</button>
      </Frame11>
    </Booking>
  );
};

const Booking = styled.div`
  width: 384px;
  height: 866px;
  border: 1px solid #b9bbc6;
  border-radius: 24px;
  padding: 24px;

  .duration {
    margin-top: 7px;
    padding-left: 15px;
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #999ba0;
  }
`;

const Frame2 = styled.div`
  p {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  p span {
    font-size: 16px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }

  .rate {
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #999ba0;
  }
`;

const Frame3 = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: "Open Sans";
  line-height: 22px;
`;

const Frame4 = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Open Sans";
  line-height: 22px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  .payment-summary {
    font-size: 14px;
    font-weight: 700;
    font-family: "Open Sans";
    line-height: 22px;
    color: #60646c;
  }
`;

const Frame6 = styled.div``;

const Frame7 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;

  .heading {
    font-size: 16px;
    font-weight: 700;
    font-family: "Open Sans";
    line-height: 22px;
    color: #1c2024;
  }

  span {
    font-size: 14px;
    font-weight: 700;
    color: #1c2024;
    font-family: "Open Sans";
  }
`;

const Frame8 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  width: 138px;
  height: 22px;
  background: #e9f9ee;
  padding: 2px;
  border-radius: 1000px;
  span {
    font-size: 12px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #299764;
  }

  .pigy-logo {
    color: #299764;
  }
`;

const Frame9 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  p {
    font-size: 12px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
    color: #60646c;
  }
`;

const Frame10 = styled.div`
  margin-top: 24px;

  .text {
    font-size: 12px;
    font-family: "Open Sans";
    line-height: 20px;
    text-align: left;
    font-weight: 700;
    color: #60646c;
  }

  .text a {
    color: #3a5ccc;
    text-decoration: none;
  }
`;

const Frame11 = styled.div`
  margin-top: 10px;
  button {
    width: 352px;
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

export default BookingSummary;
