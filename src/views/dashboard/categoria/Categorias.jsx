import "./categoria.scss";

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

import { getCategorias } from "../../../redux/actions/verCategorias";

import DataTable from "react-data-table-component";

const Categorias = ({
  getCategorias,
  categoria: {
    categorias: { categorias },
    loading,
  },
}) => {
  useEffect(() => {
    getCategorias();
  }, []);

  console.log(categorias);
  /* 
  const [{nombre}]= categorias

console.log({nombre}) */

  /*   const data = [
   {
		"name":[{nombre}],
	
	},
  ]
 */

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
  ];

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
                  <h1 style={{ textAlign: "center" }}>CATEGORIAS</h1>
                  <hr style={{ color: "black" }}></hr>

                  <div className="container mt-5">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                      <Link
                        type="button"
                        className="btn btn-primary btn-left me-md-2"
                        to="/RegisterCategoria"
                      >
                        Registrar Categorias
                      </Link>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>

                    <h1 style={{ textAlign: "center" }}>TABLA CATEGORIAS</h1>
                    <hr style={{ color: "black" }}></hr>

                    <MDBTable align="middle" bordered borderColor="info">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Categoria</th>
                          <th scope="col">Acciones</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {categorias.map((categoria) => (
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="ms-3">
                                  <p className="fw-bold mb-1">
                                    {categoria.nombre}
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

                    {/*                <DataTable
        title="Employees"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      /> */}
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
  categoria: state.categoria,
});

export default connect(mapStateToProps, {
  getCategorias,
})(Categorias);
