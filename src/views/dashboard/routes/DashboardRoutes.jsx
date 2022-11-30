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
import Panel from "../panel/Panel";
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

export const DashboardRoutes = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />

        <Routes>
          {/* <Route exact path="/Catalogo" element={<Catalogo />} />
          <Route exact path="/Informacion" element={<Info />} /> */}
          <Route exact path="/Panel" element={<Panel />} />
          {/* <Route exact path="/Iniciosesion" element={<Login />} /> */}
          <Route exact path="/RegisterUsuario" element={<RegisterUsuario />} />
          <Route
            exact
            path="/RegisterCategoria"
            element={<RegisterCategoria />}
          />
          <Route
            exact
            path="/RegisterProductos"
            element={<RegisterProductos />}
          />
          <Route exact path="/RegisterPuntos" element={<RegisterPuntos />} />
          <Route exact path="/" element={<Home />} />

          <Route path="/usuarios">
            <Route index element={<List />} />
            {/* <Route path=":userId" element={<Single />} /> */}
          </Route>

          <Route path="/productos">
            <Route index element={<Productos />} />
          </Route>

          <Route path="/categorias">
            <Route index element={<Categorias />} />
          </Route>

          <Route path="/puntos">
            <Route index element={<PuntosVentas />} />
          </Route>
          
          <Route path="/:id">
            <Route index element={<Profile />} />
          </Route>







          <Route path="/ordenes" element={<Order />} />
          <Route path="/stock" element={<Inventory />} />
          <Route path="/stock/nuevo" element={<AddInventory />} />


          <Route path="/*" element={<Navigate to="/" />} />

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
