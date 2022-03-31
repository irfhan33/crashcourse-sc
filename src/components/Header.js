import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button.styled";
import { Container } from "./../style/Container.styled";
import { Flex } from "./../style/Flex";

function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src="/images/logo.svg" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.div`
  padding: 40px 0;
  background: ${({ theme }) => theme.colors.header};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
