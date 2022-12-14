import React from "react";
import Nav from "../../../components/navbars/Nav";
import "./home.scss";
import logo from "../../../assets/img/logoSob.png";
import imagen1 from "../../../assets/img/fyv.jpg";
import imagen2 from "../../../assets/img/lacte.jpg";
import iconFacebook from "../../../assets/img/facebook.png";
import iconInstagram from "../../../assets/img/instagram.png";
import { CardHome } from "../../../components/cards/cardHome";
import CarruselHome from "./CarruselHome";

export default function Home() {
  return (
    <>
      <Nav />

      {/* -----------HEADER----------- */}
      <header className="hero">
        <div className="textos-hero">
          <h1 className="titulo-hero">
            Bienvenido a Soberanía Alimentaria Formoseña
          </h1>
          <img className="imagen-hero" width={250} height={300} src={logo} />
        </div>
        <div
          className="svg-hero"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <svg
            className="svg-hero"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#fff" }}
            ></path>
          </svg>
        </div>
      </header>


      {/* -------------BODY------------- */}

      <div className="divisor">
        <div className="divisor-titulo">Conocé este proyecto</div>
      </div>

      {/* -----------CARRUSEL----------- */}
      <div className="segunda-seccion">
        <CarruselHome />
      </div>

      
      <div className="body-home">
        <div className="cards">
          <CardHome
            imagen={imagen1}
            titulo="¿Qué es?"
            texto={
              "En Formosa, el Gobierno provincial lanzó un nuevo programa que beneficia a la economía de las familias y a los pequeños productores conocidos como paipperos (forman parte del PAIPPA).  Soberanía Alimentaria Formoseña es un programa que ofrece alimentos directamente del productor al consumidor, es decir, sin que existan intermediarios y agregados de valor entre la comercialización y las familias."
            }
          />

          <CardHome
            imagen={imagen2}
            titulo="¿Qué puedes encontrar en el programa?"
            texto="Se podrá acceder a una gran variedad de alimentos de producción local a precios referenciados. Desde frutas, verduras, hortalizas, carnes, productos lácteos y artesanales de los distintos consorcios adheridos al programa."
          />

          <CardHome
            imagen={imagen1}
            titulo="Objetivos"
            texto="Con esto se busca impulsar a la producción y consumo local, mejorar la nutrición y la seguridad alimentaria llevando a los stands productos de calidad garantizada. Mediante cronogramas el programa recorrerá todas las jurisdicciones de la provincia de Formosa para asegurarse de llegar a los lugares en donde se dan las mayores asimetrías en costos de producción y los precios que pagan los consumidores finales."
          />
        </div>
      </div>



      {/* -----------FOOTER-------------- */}
      <div className="svg-hero" style={{ height: "150px", overflow: "hidden" }}>
        <svg
          className="svg-hero"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#045694" }}
          ></path>
        </svg>
      </div>

      <div className="footer">
        <div className="info-contacto">
          <h5 className="titulo-footer">Redes sociales</h5>
          <a
            className="vinculo"
            href="https://www.facebook.com/defensaconsumidorformosa/"
            style={{ width: "50px" }}
          >
            <img width={50} height={50} src={iconFacebook} />
            <label className="vinculo-label">Facebook</label>
          </a>

          <a
            className="vinculo"
            href="https://instagram.com/soberaniaalimentariaformosena?igshid=YmMyMTA2M2Y="
            style={{ width: "50px" }}
          >
            <img width={50} height={50} src={iconInstagram} />
            <label className="vinculo-label">Instagram</label>
          </a>
        </div>

        <div className="marca">
          <p className="texto-footer">Todos los derechos reservados</p>
          <p className="texto-footer">Desarrollado por Dynamite Team 🧨</p>
        </div>

        <div className="info-establecimiento">
          <p className="texto-footer">Gobierno de la provincia de Formosa</p>
          <p className="texto-footer">República Argentina</p>
        </div>
      </div>
    </>
  );
}
