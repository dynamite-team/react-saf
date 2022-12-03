import "./list.scss";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
const columns = [
  {
    field: "nombre",
    headerName: "Nombre",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    field: "correo",
    headerName: "Correo",
    headerClassName: "super-app-theme--header",
    flex: 1,
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
      <div className="lista">
        <div className="lista-container">
          <div className="datatable">
            <div className="datatableTitle">
              Usuarios
              <Link to="/admin/RegisterUsuario" className="link">
                Agregar un usuario
              </Link>
            </div>
            {/*             <div className="datatableTitle">Usuarios</div>

            <div className="buttonList d-grid gap-2 d-md-flex justify-content-md-end">
              <Link
                type="button"
                className="btn btn-primary btn-left me-md-2"
                to="/admin/RegisterUsuario"
              >
                Registrar usuario
              </Link>
            </div> */}
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
