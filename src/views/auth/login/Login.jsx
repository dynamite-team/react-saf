
import "./login.css";
import imagenLogo from '../../../assets/img/keys.png'
import { useForm } from "../../../hooks/useForm";
import { startLogin } from "../../../redux/actions/auth";

//REDUX
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { fetchUsuario } from "../../../redux/actions/login";


//LOGIN
const Login = ({ fetchUsuario }) => {
  //REDUX
  const dispatch = useDispatch();

  /* CARGAR DATOS */

  const [formLoginValues, handleLoginInputChange] = useForm({
    correo: "",
    password: "",
  });

  const { correo, password } = formLoginValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(startLogin(correo, password));

  };

  return (
    <>
      <div className="containerLogin">
        <div className="wrapperLogin fadeInDown">
          <div id="formContent">
            <br />

            <div className="fadeIn first">
              <img src={imagenLogo} alt="" className="itemImg" />
            </div>

            <h1 className="active"> BIENVENIDO </h1>

            <form onSubmit={handleLogin} className="form-login">
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="correo"
                value={correo}
                onChange={handleLoginInputChange}
                placeholder="Correo"
              />

              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleLoginInputChange}
              />
            
              <input
                type="submit"
                id="submit"
                className="fadeIn fourth"
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
