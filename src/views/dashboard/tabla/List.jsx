import "./list.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSinToken } from "../../../helpers/fetch";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Spinner from "../../../components/spinner/Spinner";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import getProfile from "../../../redux/actions/VerProfile";
import { useDispatch } from "react-redux";


const columns = [
  {
    field: "usuario",
    headerName: "Usuario",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "nombre",
    headerName: "Nombre",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "apellido",
    headerName: "Apellido",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "correo",
    headerName: "Correo",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "rol",
    headerName: "Rol",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "updatedAt",
    headerClassName: "super-app-theme--header",
    headerName: "Ultima actualización",
    flex: 2,
  },
];

const List = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/usuarios/?desde=0&limite=20`);

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
            <Link to={`/admin/usuariosList/${params.row.id}` } style={{ textDecoration: "none" }}>
              <div className="viewButton" title="Ver" onClick={() => {
              dispatch(getProfile(params.row.id));
            }}>
                <VisibilityIcon style={{ fontSize: "18px" }} />
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
      <div className="lista">
        <div className="lista-container">
          <div className="datatable">
            <div className="datatableTitle">
              Usuarios
              <Link to="/admin/RegisterUsuario" className="link">
                Agregar un usuario
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
  );
};

export default List;
