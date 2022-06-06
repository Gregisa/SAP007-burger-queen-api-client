import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { errorCode } from "../../services/errors";
import { setToken } from "../../services/storagekeys";
import { userRegister } from "../../services/auth";
import { ErrorMessage } from "../../components/ErrorMsg";
import { Header } from "../../components/Logo";
import { Input } from "../../components/Input";
import { SubmitButton } from "../../components/Button";
import { Footer } from "../../components/Footer";

export function Register() {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userRole, setRole] = useState("hall");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userRegister(
        userName,
        userEmail,
        userPassword,
        userRole
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data.token);
        setToken(data.token);
        navigate("/");
      }
      setErrorMessage(errorCode(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <form className="register-form">
        <Input
          inputType="text"
          inputPlaceholder="Nome"
          inputValue={userName}
          inputOnChange={(event) => setName(event.target.value)}
        />

        <Input
          inputType="text"
          inputPlaceholder="E-mail"
          inputValue={userEmail}
          inputOnChange={(event) => setEmail(event.target.value)}
        />

        <Input
          inputType="password"
          inputPlaceholder="Crie uma senha"
          inputValue={userPassword}
          inputOnChange={(event) => setPassword(event.target.value)}
        />

        <div className="radio-container">
          <label className="role-label">
            <input
              className="input-radio"
              type="radio"
              value="hall"
              name="role"
              checked={userRole === "hall"}
              onChange={(e) => setRole(e.target.value)}
            />
            &nbsp;Atendente
          </label>
          <label className="role-label">
            <input
              className="input-radio"
              type="radio"
              value="kitchen"
              name="role"
              checked={userRole === "kitchen"}
              onChange={(e) => setRole(e.target.value)}
            />
            &nbsp;Cozinha
          </label>
        </div>

        <SubmitButton onClick={handleSubmit} type="submit">
          Cadastrar
        </SubmitButton>
        <ErrorMessage
          disable={errorMessage ? false : true}
          message={errorMessage}
        />
        <p className="register-text">
          Já tem uma conta? &nbsp;
          <Link className="register-text" to="/Login">
            Faça login
          </Link>
        </p>
      </form>
      <Footer />
    </div>
  );
}
