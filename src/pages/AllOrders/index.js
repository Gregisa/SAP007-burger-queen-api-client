import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from "../../components/Logo";
import { SubmitButton } from "../../components/Button";
import {Footer} from "../../components/Footer";

export function AllOrders() {
    const navigate= useNavigate();

    function handleBackHall() {
        localStorage.removeItem("token");
        navigate("/hall");
      }
    return (
        <section className="orders-status-container">
            <Header />
            <SubmitButton children="Voltar ao Hall" onClick={handleBackHall}/>
            <p>Aqui ficarão os pedidos</p>
            <Footer />
        </section>

    )
}