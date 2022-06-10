import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Logo";
import { SubmitButton } from "../../components/Button";
import { Container } from "../../components/HallContainer";
import { Footer } from "../../components/Footer";

export function Hall() {
  return (
    <>
      <header>
        <Header />
        <SubmitButton>
          <Link to="/Login">Café da manhã</Link>
        </SubmitButton>
        <SubmitButton>
          <Link to="/Login">Dia todo</Link>
        </SubmitButton>
        <SubmitButton>
          <Link to="/AllOrders">Pedidos</Link>
        </SubmitButton>
        <SubmitButton>
          <Link to="/Login">Sair</Link>
        </SubmitButton>
      </header>
      <Container />
      <Footer />
    </>
  );
}
