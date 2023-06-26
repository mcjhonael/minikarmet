// import React, { useContext } from "react";
import React from "react";
import { useState } from "react";
import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../../../context/auth/authContext";

const AuthLogin = () => {
  // const localAuthContext = useContext(AuthContext);
  // const { iniciarSesion } = localAuthContext;
const navigate = useNavigate()

  const [formulario, setFormulario] = useState({
    dni: "",
    password: "",
  });
const {dni,password}=formulario
  const handleChange = ({target:{name,value}}) => {
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: validar los campos del formulario e inclusive generar una variable
    // de estado de error en el formulario
    postLogin(dni, password).then((rpta) => {
      console.log("inicio session");
      if (rpta.id) {
        console.log(rpta);
        // iniciarSesion(rpta.token);
        navigate("/admin");
      }
    });
  };

  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario" onSubmit={onSubmit}>
          <label htmlFor="">DNI:</label>
          <input
            type="text"
            className="formulario__input"
            placeholder="DNI"
            name="dni"
            value={dni}
            onChange={handleChange}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            className="formulario__input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
};

export default AuthLogin;
