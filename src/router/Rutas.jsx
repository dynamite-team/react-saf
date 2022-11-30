import React from 'react'
import { 

    BrowserRouter as Router,
    Routes,
    Route,
 }  from "react-router-dom";

import Home from '../views/home/Home';
import Info from '../views/informacion/Info';
import Login from '../views/login/Login'; 
import Panel from '../views/panel/Panel';
import List from "../views/tabla/List";
import RegisterUsuario from "../views/Registros/Register";
import RegisterCategoria from "../views/Registros/RegisterCategorias";
import RegisterProductos from "../views/Registros/RegisterProductos";
import Categorias from '../views/categoria/Categorias';
import Productos from '../views/productos/Productos';
import PuntosVentas from '../views/puntosDeVentas/Puntos';
import RegisterPuntos from '../views/Registros/RegisterPuntos';
import Catalogo from '../views/catalogo/catalogo';

import Profile from '../views/profile/Profile';

export default function Rutas  ()  {
  return (
  
    <Router>
      
        <Routes>
        <Route exact path="/Catalogo" element={<Catalogo/>}/> 
          <Route exact path="/Informacion" element={<Info/>}/>
          <Route exact path="/Panel" element={<Panel/>}/>
          <Route exact path="/Iniciosesion" element={<Login/>}/> 
          <Route exact path="/RegisterUsuario" element={<RegisterUsuario/>}/> 
          <Route exact path="/RegisterCategoria" element={<RegisterCategoria/>}/> 
          <Route exact path="/RegisterProductos" element={<RegisterProductos/>}/> 
          <Route exact path="/RegisterPuntos" element={<RegisterPuntos/>}/> 
          <Route exact path="/" element={<Home/>}/>
          
          <Route path="users">
              <Route index element={<List />} />
              {/* <Route path=":userId" element={<Single />} /> */}
              
            </Route>

          <Route path="/products">
              <Route index element={<Productos/>} />   
            </Route>

            <Route path="/Categorias">
              <Route index element={<Categorias/>} />   
            </Route>

            <Route path="/Puntos">
              <Route index element={<PuntosVentas/>} />   
            </Route>

            <Route path="/:id">
              <Route index element={<Profile/>} />   
            </Route>

        </Routes>
     
    </Router>
  

  )
}

