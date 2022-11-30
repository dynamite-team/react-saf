import React from 'react'

import { 
  Link
  
   }  from "react-router-dom";
   
export default function Nav () {


  return (
    <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SAF</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
    <Link  type="button" className="btn btn-outline-primary me-md-2" to="/Informacion">Informacion</Link>
    <Link  type="button" className="btn btn-outline-primary me-md-2" to="/Iniciosesion">Inicio sesion</Link>
    <Link  type="button" className="btn btn-outline-primary me-md-2" to="/Catalogo">Ver catalogo</Link>
</div>
  </div>
</nav>
    </>
    
   
  )
}

