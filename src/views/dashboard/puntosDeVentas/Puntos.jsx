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
import Spinner from "../../../components/spinner/Spinner";

import { getPuntos } from "../../../redux/actions/verPuntos";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import Box from "@mui/material/Box";

const columns = [
  {
    field: "nombre",
    headerName: "Dirección",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    field: "departamento",
    headerName: "Departamento",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "barrio",
    headerName: "Barrio",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "descripcion",
    headerName: "Descripcion",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "updatedAt",
    headerClassName: "super-app-theme--header",
    headerName: "Ultima actualización",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "usuario",
    headerName: "Actualizado por",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
];

const Puntos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/puntos/?desde=0&hasta=5`);

    const { tabla } = await resp.json();

    if (resp.ok) {
      setData(tabla);
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarList();
  }, []);

  const actionColumn = [
    {
      align: "center",
      headerAlign: "center",
      field: "action",
      headerName: "Action",
      headerClassName: "super-app-theme--header",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Ver</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Borrar
            </div>
          </div>
        );
      },
    },
  ];

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <>
        <div className="puntos">
          <div className="puntos-container">
            <div className="datatable">
              <div className="datatableTitle">
                Puntos de venta
                <Link to="/admin/RegisterPuntos" className="link">
                  Agregar un punto
                </Link>
              </div>
              <Box
                sx={{
                  height: "90%",
                  width: "100%",
                  "& .super-app-theme--header": {
                    backgroundColor: "#045694",
                    color: "#fff",
                  },
                }}
              >
                <DataGrid
                  className="datagrid"
                  rows={data}
                  columns={columns.concat(actionColumn)}
                  autoHeight
                  pageSize={8}
                  rowsPerPageOptions={[8]}
                  checkboxSelection={false}
                />
              </Box>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Puntos;
