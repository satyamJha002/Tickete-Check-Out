import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <MainFooter>
        <img src="images/Logo2.png" alt="logo" />
        <FooterEnd>
          <hr style={{ width: "100%", color: "#FFFFFF", marginTop: "40px" }} />
          <Text>
            <p className="text">Made with💙</p>
            <ul>
              <li>
                <a href="">Privacy policy</a>
              </li>
              <li>
                <a href="">Terms of usage</a>
              </li>
              <li>
                <a href="">Cancellation policy</a>
              </li>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
          </Text>
        </FooterEnd>
      </MainFooter>
    </>
  );
};

const MainFooter = styled.div`
  width: 1440px;
  height: 316px;
  padding: 80px;
  background-color: #000000;

  img {
    width: 200px;
    height: 48px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 80px;
  }
`;

const FooterEnd = styled.div``;

const Text = styled.div`
  display: flex;
  margin: 64px;

  .text {
    font-size: 14px;
    font-family: "Open Sans";
    font-family: "Roboto Serif";
    line-height: 24px;
    padding-right: 20px;
    color: #adb1b8;
    font-weight: 700;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    gap: 30px;
  }

  ul li a {
    color: #7d828a;
    text-decoration: none;
    font-size: 14px;
    font-family: "Open Sans";
    line-height: 24px;
    font-weight: 700;
  }
`;
export default Footer;
