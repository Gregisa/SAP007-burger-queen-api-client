import { Link } from "react-router-dom";
import Header from "../../components/Logo";
import SubmitButton from '../../components/Button';
import Footer from "../../components/Footer";

export function Register() {
  return (

    <div className="register-container">
      <Header />
      <form autoComplete="nope">
        <input id="register-name" type="text" placeholder="Nome" autoComplete="off" />
        <input id="register-email" type="password" placeholder="Email" />
        <input id="register-password" type="password" placeholder="Senha" />
        <input id="restaurant-name" type="password" placeholder="Restaurante" />
        <input id="role" type="password" placeholder="Função" />
        <SubmitButton />
        <p className="register-text"> Já tem uma conta?
              <Link
                className="register-text"
                to="/Login">
                Faça login
              </Link>
            </p>
      </form>
      <Footer />
    </div>
  );
};
