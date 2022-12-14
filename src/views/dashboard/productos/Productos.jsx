import "./productos.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Image, Transformation } from "cloudinary-react";
import Spinner from "../../../components/spinner/Spinner";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getProducto } from "../../../redux/actions/verProductos";
import { useDispatch } from "react-redux";

const columns = [
  {
    field: "id",
    headerName: "ID",
    hide: true,
    width: 50,
  },
  {
    field: "img",
    headerName: "Nombre",
    flex: 2,
    headerClassName: "super-app-theme--header",
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
            <Transformation height="50" width="50" />
          </Image>
          {capitalizeFirstLetter(params.row.nombre.toLowerCase())}
        </div>
      );
    },
    valueGetter: (params) => params.row.nombre,
  },
  /*   {
    field: "nombre",
    headerName: "Nombre",
    headerClassName: "super-app-theme--header",
    width: 200,
  }, */
  {
    field: "descripcion",
    headerName: "Descripción",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "precio",
    headerName: "Precio ($)",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "unidad",
    headerName: "Se vende por",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "lote",
    headerName: "Lote",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "proveedor",
    headerName: "Proveedor",
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
  {
    align: "center",
    headerAlign: "center",
    field: "usuario",
    headerName: "Actualizado por",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
];
const Productos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/productos/?desde=0&limite=10`);

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
           
              <div className="viewButton" title="Ver">
                <VisibilityIcon style={{ fontSize: "18px" }} />
              </div>
            
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
        <div className="productos">
          <div className="productos-container">
            <div className="datatable">
              <div className="datatableTitle">
                Productos
                <Link to="/admin/RegisterProductos" className="link">
                  Agregar un producto
                </Link>
              </div>
              {/* <div className="datatableTitle">Productos</div>

              <div className="buttonList d-grid gap-2 d-md-flex justify-content-md-end">
                <Link
                  type="button"
                  className="btn btn-primary btn-left me-md-2"
                  to="/admin/RegisterProductos"
                >
                  Registrar producto
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

export default Productos;
