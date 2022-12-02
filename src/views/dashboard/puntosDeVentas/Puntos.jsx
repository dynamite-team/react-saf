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
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import Box from '@mui/material/Box';
const columns = [
  
  { field: "nombre", headerName: "Nombre", headerClassName: 'super-app-theme--header', width: 200 },
  { field: "departamento", headerName: "Departamento", headerClassName: 'super-app-theme--header', width: 200 },
  { field: "barrio", headerName: "Barrio", headerClassName: 'super-app-theme--header', width: 200 },
  { field: "descripcion", headerName: "Descripcion", headerClassName: 'super-app-theme--header', width: 200 },
  
];

const Puntos = () => {
 
  const [data, setData] = useState([]);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/puntos/?desde=0&hasta=5`);

    const { tabla } = await resp.json();

    if (resp.ok) {
      setData(tabla);
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
      headerClassName: 'super-app-theme--header',
      flex: 1.5,
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

  console.log(data);

  return (
    <>
 
        <>
         



          <div className="order">
    <div className="order-container">
      <div className="datatable">
        <div className="datatableTitle">Puntos de ventas</div>
        <div className="buttonPunto d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link  type="button" className="btn btn-primary btn-left me-md-2" to="/admin/RegisterPuntos">Registrar Punto</Link>
                    </div>
                    <Box
      sx={{
        height: 400,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#045694',
          color: '#fff',
        },
      }}
    >            
        <DataGrid
          className="datagrid"
          rows={data}
          columns={columns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        </Box>
      </div>
    </div>
  </div>
        </>
   
    </>
  );
};



export default Puntos
