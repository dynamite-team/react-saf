import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/img/estrella.png'


export default function Nav() {
  return (
    <>
      <nav style={{ backgroundColor: "#045694", height: "80px" }}>
        <div>
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width={60}
              height={60}
              style={{ "margin-top": "8%", marginLeft: "55%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="d-grid gap-2 d-md-flex justify-content-md-end"
            style={{ "margin-top": "-3.5%", marginRight: "2%" }}
          >
            <Link
              type="button"
              className="btn btn-outline-light me-md-2"
              to="/Iniciosesion"
            >
              Inicio sesion
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
