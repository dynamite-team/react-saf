import "./puntos.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../../../components/spinner/Spinner";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import Box from "@mui/material/Box";
import getProfile from "../../../redux/actions/VerProfile";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from '@mui/icons-material/Edit';

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
            <Link  to={`/admin/RegisterEditPuntos/${params.row.id}` } style={{ textDecoration: "none" }}>
              <div className="viewButton" title="Editar" onClick={()=> getProfile(params.row.id)}>
                <EditIcon style={{ fontSize: "18px" }} />
              </div>
            </Link>
            <div
              className="deleteButton"
              title="Borrar"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon style={{ fontSize: "18px" }} />
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
