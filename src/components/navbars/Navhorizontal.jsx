import "./navhorizontal.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { fetchUsuario } from "../../redux/actions/login";


const Sidebar = ({ data} ) =>{
  

 console.log(data)

  return (
    <div className="sidebar" style={{backgroundColor:'#045694' }}  >
      <div className="top">
        <Link to="/panel" style={{ textDecoration: "none" }}>
          <span style={{ color: "white" }} className="logo">ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <p className="title" style={{ color: "white" }}>LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" style={{ color: "white" }}/>
              <span style={{ color: "white" }}>Usuarios</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Productos</span>
            </li>
          </Link>

          <Link to="/Categorias" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Categorias</span>
            </li>
          </Link>

          <Link to="/Puntos" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Puntos de venta</span>
            </li>
          </Link>

          

         
        
          <p className="title" style={{ color: "white" }}>USER</p>
         
          <Link to={`/${data.payload.usuario.uid}`}  /* to="/id" */ style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ color: "white" }} />
              <span style={{ color: "white" }}>Profile </span>
            </li>
          </Link>


          <li>
            <ExitToAppIcon className="icon" style={{ color: "white" }}/>
            <span style={{ color: "white" }}>Logout</span>
          </li>
        </ul>
      </div>
     
    </div>
  );
};


//SACAR DEL ESTADO
const mapStateToProps = (state) => ({
  data: state.buscadorUsuario.data,
});

//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default connect(mapStateToProps, { fetchUsuario })(Sidebar);
