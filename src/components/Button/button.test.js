import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitButton from "./index";

it("Deve renderizar o botao com o texto fornecido", () => {
  const label = "Login";
  render(<SubmitButton> {label} </SubmitButton>);
  const toBeFind = screen.getByText(label);
  expect(toBeFind).toBeInTheDocument();
});
it("Deve executar a funçao de click ao clicar", () => {
  const label = "Click";
  const fn = jest.fn();
  render(<SubmitButton buttonOnClick={fn}> {label} </SubmitButton>);
  const clicked = screen.getByText(label);
  fireEvent.click(clicked);
  expect(fn).toHaveBeenCalledTimes(1);
});
