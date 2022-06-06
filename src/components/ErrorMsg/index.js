import React from "react";
import styled from "styled-components";

const MessageCode = styled.p`
  color: red;
  font-size: 18px;
  margin-top: 1em;
  background-color: var(--beige);
`;

export const ErrorMessage= ({ message }) => {
  return (
    <>
      <MessageCode>{message}</MessageCode>
    </>
  );
}

