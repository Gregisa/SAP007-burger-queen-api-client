import React from "react";
import { SubmitButton } from "../../components/Button";
import { Header } from "../../components/Logo";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export function Kitchen() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <>
      <Header />
      <SubmitButton children="Sair" onClick={handleLogout} />
      <p>Aqui ficarão os pedidos a preparar</p>
      <Footer />
    </>
  );
}

