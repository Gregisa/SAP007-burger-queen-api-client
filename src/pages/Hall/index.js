import { Link } from "react-router-dom";
import Header from "../../components/Logo";
import Footer from "../../components/Footer";

export function Hall() {
    return (
        <main>
            <header>
                <Header />
                <button className="btn-logout" id="logout-btn">
                    <Link
                        to="/Login">
                        Sair
                    </Link>
                </button>
                <button className="btn-orders" id="orders-btn">
                    <Link
                        to="/AllOrders">
                        Pedidos
                    </Link>
                </button>
            </header>
            <Footer />
        </main>
    )
}

