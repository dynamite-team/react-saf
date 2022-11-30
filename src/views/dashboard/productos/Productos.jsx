import "./productos.scss";

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

import { getProductos } from "../../../redux/actions/verProductos";

import { Image, Transformation } from "cloudinary-react";

const Productos = ({
  getProductos,
  producto: {
    productos: { productos },
    loading,
  },
}) => {
  //const [encontrado, setEncontrado] = useState();

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  return (
    <>
      {!loading ? (
        <>
          <div className="list">
            {/*  <Sidebar /> */}
            <div className="listContainer">
              <div className="datatable">
                <div className="datatableTitle">
                  <br />
                  <h1 style={{ textAlign: "center" }}>PRODUCTOS</h1>
                  <hr style={{ color: "black" }}></hr>

                  <div className="container mt-5">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                      <Link
                        type="button"
                        className="btn btn-primary btn-left me-md-2"
                        to="/RegisterProductos"
                      >
                        Registrar Productos
                      </Link>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: "center" }}>TABLA PRODUCTOS</h1>
                    <hr style={{ color: "black" }}></hr>

                    <MDBTable align="middle" bordered borderColor="info">
                      <MDBTableHead>
                        <tr>
                          <th scope="col"> </th>
                          <th scope="col">Productos</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {productos.map((producto) => (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    <Image
                                      className="cellImg"
                                      cloudName="dawjd5cx8"
                                      publicId={producto.img}
                                      alt="avatar"
                                    >
                                      <Transformation
                                        height="100"
                                        width="100"
                                        //radius="max"
                                        aspectRatio="1.5"
                                        crop="fill"
                                      />
                                    </Image>

                                    {/* {producto.img} */}
                                  </p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {producto.nombre}
                                  </p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {producto.precio}
                                  </p>
                                  <p className="text-muted mb-0"></p>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {producto.categoria.nombre}
                                  </p>
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
  producto: state.producto,
});

export default connect(mapStateToProps, {
  getProductos,
})(Productos);
