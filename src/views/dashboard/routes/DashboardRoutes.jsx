import { Navigate, Route, Routes } from "react-router-dom";
import AddInventory from "../inventory/AddInventory";
//import Home from "../home-backup/Home";
import Inventory from "../inventory/Inventory";
import Navbar from "../../../components/navbar/Navbar";
import Order from "../order/Order";
import Sidebar from "../../../components/sidebar/Sidebar";

import Home from "../home/Home";
//import Info from "../informacion/Info";
//import Login from "../login/Login";
//import Panel from "../panel/Panel";
import List from "../tabla/List";
import RegisterUsuario from "../Registros/Register";
import RegisterCategoria from "../Registros/RegisterCategorias";
import RegisterProductos from "../Registros/RegisterProductos";
import Categorias from "../categoria/Categorias";
import Productos from "../productos/Productos";
import PuntosVentas from "../puntosDeVentas/Puntos";
import RegisterPuntos from "../Registros/RegisterPuntos";
//import Catalogo from "../catalogo/catalogo";

import Profile from "../profile/Profile";

import "./dasboardRoutes.scss";
import SingleOrder from "../order/SingleOrder";

export const DashboardRoutes = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />

        <Routes>
          {/* <Route exact path="/Iniciosesion" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<List />} />
          <Route path="/usuarios/:id" element={<Profile />} />
          <Route path="/RegisterUsuario" element={<RegisterUsuario />} />
          <Route path="/puntos" element={<PuntosVentas />} />
          <Route path="/RegisterPuntos" element={<RegisterPuntos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/RegisterCategoria" element={<RegisterCategoria />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/RegisterProductos" element={<RegisterProductos />} />

          <Route path="/ventas" element={<Order />} />
          <Route path="/venta/:id" element={<SingleOrder />} />
          <Route path="/stock" element={<Inventory />} />
          <Route path="/stock/nuevo" element={<AddInventory />} />

          <Route path="/*" element={<Navigate to="/admin" />} />
        </Routes>

        {/* Mis rutas */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ordenes" element={<Order />} />
          <Route path="/stock" element={<Inventory />} />
          <Route path="/stock/nuevo" element={<AddInventory />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes> */}
      </div>
    </div>
  );
};
