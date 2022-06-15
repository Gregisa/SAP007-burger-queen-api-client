import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const HeaderDefault = styled.header`
  width: 100%;
  height: 20vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const SmallerLogo = styled.img`
  width: 30vw;
  height: 20vh;
`;
export const MainHeader = () => {
  return (
    <HeaderDefault>
      {<SmallerLogo src={logo} alt="Logo Jazz Burger" />}
    </HeaderDefault>
  );
};
