import React from "react";
import styled from "styled-components";
import { Container } from "./../style/Container.styled";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Wrapper>
          <SectionOne>
            <img src="/images/logo_white.svg" alt="" />
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
          </SectionOne>
          <SectionTwo>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>
          </SectionTwo>
          <SectionThree>
            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </SectionThree>
          <SectionFour>
            <ul>
              <li>
                <a href="https://twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </SectionFour>
        </Wrapper>
      </Container>
    </FooterStyled>
  );
}

export default Footer;

const FooterStyled = styled.div`
  background: ${({ theme }) => theme.colors.footer};
  color: white;
  padding: 100px 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const SectionOne = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-top: 20px;
      cursor: pointer;
    }
  }
`;
const SectionTwo = styled(SectionOne)``;
const SectionThree = styled(SectionOne)``;
const SectionFour = styled(SectionOne)`
  ul {
    display: flex;
    gap: 10px;
    a {
      border: 1px solid #fff;
      border-radius: 50%;
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      text-decoration: none;
    }
  }
`;
