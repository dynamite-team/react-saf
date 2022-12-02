import "./list.scss";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
const columns = [
  { field: "nombre", headerName: "Nombre",   headerClassName: 'super-app-theme--header', width: 300 },
  { field: "correo", headerName: "Correo",   headerClassName: 'super-app-theme--header', width: 300 },
  { field: "rol", headerName: "Rol",    headerClassName: 'super-app-theme--header',width: 300 },
];

const List = () => {
  const [data, setData] = useState([]);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/usuarios/?desde=0&limite=20`);

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



    <div className="order">
    <div className="order-container">
      <div className="datatable">
        <div className="datatableTitle">Usuarios</div>

        <div class="buttonList d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link  type="button" className="btn btn-primary btn-left me-md-2" to="/admin/RegisterUsuario">Registrar usuario</Link>
                    </div>
          <Box
      sx={{
        height: 550,
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
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          
        />
        </Box>
      </div>
    </div>
  </div>
  </>

  );
};

export default List;
