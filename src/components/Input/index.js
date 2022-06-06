import React from "react";
import styled from "styled-components";

const InputDefault = styled.input`
  background-color: #fff;
  width: 15em;
  height: 2.5em;
  margin-top: 1em;
  border: none;
  font-size: 18px;

  @media (min-width: 1026px) {
    width: 18em;
    height: 2em;
  }
`;
export const Input = ({
  inputType,
  inputPlaceholder,
  inputValue,
  inputOnChange,
  inputOnClick,
}) => {
  return (
    <InputDefault
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={inputOnChange}
      onClick={inputOnClick}
    ></InputDefault>
  );
};
