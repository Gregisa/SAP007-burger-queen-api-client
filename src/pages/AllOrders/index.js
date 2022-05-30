import { Link } from "react-router-dom";
import Header from "../../components/Logo";
import Footer from "../../components/Footer";

export function AllOrders() {
    return (
        <section className="orders-status-container">
            <Header />
            <button className="back-to-hall-btn">
                <Link to="/Hall">
                    Hall
                </Link>
            </button>
            <p>Aqui ficarão os pedidos</p>
            <Footer />
        </section>

    )
}