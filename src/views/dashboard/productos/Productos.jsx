import "./productos.scss";


import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

import { Image, Transformation } from "cloudinary-react";
import Spinner from "../../../layout/Spinner";

import { getProductos } from "../../../redux/actions/verProductos";

import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
const columns = [
  {
    field: "img",
    headerName: "Foto ",
    flex: 1,
    headerClassName: 'super-app-theme--header',
    renderCell: (params) => {
      return (
        <div
          className="cellWithImg"
           
          style={{
           
            display: "flex",
      
            justifyContent: "center",
           
            
         
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
  { field: "nombre", headerName: "Nombre",   headerClassName: 'super-app-theme--header', width: 200 },
  { field: "precio", headerName: "Precio",    headerClassName: 'super-app-theme--header',width: 150 },
  { field: "lote", headerName: "Lote",   headerClassName: 'super-app-theme--header', width: 150 },
  { field: "proveedor", headerName: "Proveedor",   headerClassName: 'super-app-theme--header', width: 150 },
  { field: "usuario", headerName: "Usuario",    headerClassName: 'super-app-theme--header',width: 130 },
];
const Productos = () => {
  const [data, setData] = useState([]);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/productos/?desde=0&limite=10`);

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


 
  return (
    <>
     
        <>

<div className="order">
    <div className="order-container">
      <div className="datatable">
        <div className="datatableTitle">Productos</div>

        <div class="buttonList d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link  type="button" className="btn btn-primary btn-left me-md-2" to="/admin/RegisterProductos">Registrar producto</Link>
                    </div>
        <Box
      sx={{
        height: 600,
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
  
    </>
  );
};


export default Productos
