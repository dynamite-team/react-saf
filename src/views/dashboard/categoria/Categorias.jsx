import "./categoria.scss";

import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import { Image, Transformation } from "cloudinary-react";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import { useState } from "react";
import { useEffect } from "react";
import { width } from "@mui/system";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
const columns = [
  {
    field: "img",
    headerName: "Foto ",
    flex: 1,
    headerClassName: 'super-app-theme--header',
    cellClassName: 'super-app-theme--cell',
   
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
           
          style={{
           
            display: "flex",
            position:"relative",
            justifyContent: "center",
            left:"70px"
            
         
          }}
        >
          <Image
          
            className="cellImg"
            cloudName="dawjd5cx8"
            publicId={params.row.img}
            alt="avatar"
          >
            <Transformation
              height="50"
              width="50"
          
      
            />
          </Image>
      
        </div>
      );
    },
  },
  { field: "nombre", headerName: "Nombre", headerClassName: 'super-app-theme--header', width: 300 },
  { field: "createdAt", headerName: "Fecha de creacion ",  headerClassName: 'super-app-theme--header',width: 300 },
];

const Categorias = () => {
  const [data, setData] = useState([]);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/categorias/?desde=0&limite=20`);

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
              <div className="datatableTitle">Categorias</div>

              <div className="buttonPunto d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link  type="button" className="btn btn-primary btn-left me-md-2" to="/admin/RegisterPuntos">Registrar Categoria</Link>
                    </div>

              <Box
      sx={{
        height: 400,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#045694',
          color: '#fff',

        },
        '& .super-app-theme--cell': {
          backgroundColor: '#045694',
          color: '#1a3e72',
          fontWeight: '600',
        }
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

export default Categorias;
