import { Link } from "react-router-dom";
import Header from "../../components/Logo"
import SubmitButton from '../../components/Button';
import Footer from "../../components/Footer";

export function Login() {
  return (

    <div className="login-container">
      <Header />
      <form className="login-form" autoComplete="nope">
        <input id="userEmail" type="text" className="input-form" placeholder="Email" name="email" autoComplete="off" />
        <input id="userPassword" type="password" className="input-form" placeholder="Senha" name="password" />
        <SubmitButton />
        <p className="register-text"> Não tem uma conta?
              <Link
                className="register-text"
                to="/Register">
                Cadastre-se
              </Link>
            </p>
      </form>
      <Footer />
    </div>
  );
};
