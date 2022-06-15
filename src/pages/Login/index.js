import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorCode } from "../../services/errors";
import { setToken } from "../../services/storagekeys";
import { userLogin } from "../../services/auth";
import { ErrorMessage } from "../../components/ErrorMsg";
import { Header } from "../../components/Logo";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Login() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(userEmail, userPassword);
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.token);
        setToken(data.token);
        navigate(data.role === "hall" ? "/hall" : "/kitchen");
      }
      setErrorMessage(errorCode(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <form className="login-form">
        <Input
          inputType="email"
          inputPlaceholder="Email"
          inputValue={userEmail}
          inputOnChange={(e) => setEmail(e.target.value)}
        />
        <Input
          inputType="password"
          inputPlaceholder="Senha"
          inputValue={userPassword}
          inputOnChange={(e) => setPassword(e.target.value)}
        />
        <ErrorMessage
          disable={errorMessage ? false : true}
          message={errorMessage}
        />
        <SubmitButton children="Entrar" onClick={handleLogin} type="submit" />
        <p className="register-text">
          Não tem uma conta? &nbsp;
          <Link className="register-text" to="/Register">
            Cadastre-se
          </Link>
        </p>
      </form>
      <Footer />
    </div>
  );
}
