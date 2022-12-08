import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";
import imagenLogo from '../../../assets/img/keys.png'

import { useForm } from "../../../hooks/useForm";

import { startLogin } from "../../../redux/actions/auth";

//REDUX
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchUsuario } from "../../../redux/actions/login";

import shortid from "shortid";

import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        DynamiteTeam
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
{
  /* axxx */
}
const theme = createTheme();

//LOGIN
const Login = ({ fetchUsuario }) => {
  //REDUX
  const dispatch = useDispatch();

  /* CARGAR DATOS */

  //const [email, setUsuario] = useState('')
  const [errorMessage, setErrorMessage] = useState(null);

  const [formLoginValues, handleLoginInputChange] = useForm({
    correo: "",
    password: "",
  });

  const navigate = useNavigate();

  const { correo, password } = formLoginValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(startLogin(correo, password));

    /*   const enviarDatos = await fetchUsuario(correo, password);

    if (enviarDatos == true) {
      navigate("/Panel");
    }

    console.log(correo);
    console.log("fetch", await fetchUsuario(correo, password));
    console.log(password); */
  };

  return (
    <>
      <div class="containerLogin">
        <div class="wrapperLogin fadeInDown">
          <div id="formContent">
            <br />

            <div class="fadeIn first">
              <img src={imagenLogo} alt="" className="itemImg" />
            </div>

            <h1 class="active"> BIENVENIDO </h1>

            <br />
            <br />
            <br />

            <form onSubmit={handleLogin}>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="correo"
                value={correo}
                onChange={handleLoginInputChange}
                placeholder="correo"
              />

              <input
                type="text"
                id="password"
                class="fadeIn third"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleLoginInputChange}
              />
              <br />
              <br />
              <input
                type="submit"
                id="submit"
                class="fadeIn fourth"
                value="Enviar"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

//SACAR DEL ESTADO
const mapStateToProps = (state) => ({
  data: state.buscadorUsuario.data,
});

//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default connect(mapStateToProps, { fetchUsuario })(Login);
