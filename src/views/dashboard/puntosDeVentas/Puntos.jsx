import "./puntos.scss";

//import Sidebar from "../../../components/navbars/Navhorizontal";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Button, Title, TextInput, Modal } from "@mantine/core";

import { Link } from "react-router-dom";

import { connect, useSelector } from "react-redux";
//import verUsuarios from "../../redux/actions/usuarios";
import { useEffect, useState } from "react";
import Spinner from "../../../layout/Spinner";

import { getPuntos } from "../../../redux/actions/verPuntos";

const Puntos = ({
  getPuntos,
  punto: {
    puntos: { puntos },
    loading,
  },
}) => {
  useEffect(() => {
    getPuntos();
  }, []);

  console.log(puntos);

  return (
    <>
      {!loading ? (
        <>
          <div className="list">
            {/* <Sidebar /> */}
            <div className="listContainer">
              <div className="datatable">
                <div className="datatableTitle">
                  <br />
                  <h1 style={{ textAlign: "center" }}>PUNTOS DE VENTAS</h1>
                  <hr style={{ color: "black" }}></hr>

                  <div className="container mt-5">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                      <Link
                        type="button"
                        className="btn btn-primary btn-left me-md-2"
                        to="/RegisterPuntos"
                      >
                        Registrar Puntos de Ventas
                      </Link>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: "center" }}>
                      TABLA PUNTOS DE VENTAS
                    </h1>
                    <hr style={{ color: "black" }}></hr>

                    <MDBTable align="middle" bordered borderColor="info">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Direccion</th>
                          <th scope="col">Departamento</th>
                          <th scope="col">Barrio</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {puntos.map((punto) => (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">{punto.nombre}</p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {punto.departamento}
                                  </p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">{punto.barrio}</p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <MDBBtn color="link" rounded size="sm">
                                <button
                                  type="button"
                                  className="btn btn-outline-warning mx-3"
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-danger"
                                >
                                  Delete
                                </button>
                              </MDBBtn>
                            </td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  punto: state.punto,
});

export default connect(mapStateToProps, {
  getPuntos,
})(Puntos);
