import React from "react";
import logo from "../../assets/logo.png";
import styled from "styled-components";

const JBLogo = styled.header`
  display: flex;
  justify-content: center;
  height: 40vh;
`;

const LogoImg = styled.img`
  width: 25em;
  height: 25em;

  @media (min-width: 1026px) {
   width: 18em;
   height: 18em;
  }
`;

export const Header= () => {
  return (
    <JBLogo>
      <LogoImg src={logo} alt="Logo Jazz Burger" />
    </JBLogo>
  );
}

