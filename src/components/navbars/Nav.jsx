import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/estrella.png";

import "./nav.scss";

export default function Nav() {
  return (
    /*     <nav style={{ backgroundColor: "#045694", height: "80px" }}>
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width={60}
          height={60}
          style={{ marginTop: "8%", marginLeft: "55%" }}
        />
      </a>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ marginTop: "-3.5%", marginRight: "2%" }}
      >
        <Link
          type="button"
          className="btn btn-outline-light me-md-2"
          to="/admin/auth/login"
        >
          Inicio sesion
        </Link>
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{ marginTop: "-3.5%", marginRight: "2%" }}
      >
        <Link
          type="button"
          className="btn btn-outline-light me-md-2"
          to="/admin/auth/login"
        >
          Inicio sesion
        </Link>
      </div>
    </nav> */
    <div className="navbar-container">
      <Link to="/">
        <div className="navbar-wrapper">
          <img src={logo} width={60} height={60} />{" "}
          <div className="navbar-texto">Soberania Alimentaria Formoseña</div>
        </div>
      </Link>
      <div className="navbar-wrapper">
        <div className="navbar-item">
          <Link
            type="button"
            className="btn btn-outline-light me-md-2"
            to="/catalogo"
          >
            Catálogo
          </Link>
        </div>
        <div className="navbar-item">
          <Link
            type="button"
            className="btn btn-outline-light me-md-2"
            to="/admin/auth/login"
          >
            Soy parte de SAF
          </Link>
        </div>
      </div>
    </div>
  );
}
