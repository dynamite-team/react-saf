import "./categorias.scss";

import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import { Image, Transformation } from "cloudinary-react";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import { useState } from "react";
import { useEffect } from "react";
import { width } from "@mui/system";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Spinner from "../../../components/spinner/Spinner";
const columns = [
  {
    field: "img",
    headerName: "Nombre",
    flex: 3,
    headerClassName: "super-app-theme--header",
    cellClassName: "super-app-theme--cell",

    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <Image
            className="cellImg"
            cloudName="dawjd5cx8"
            publicId={params.row.img}
            alt="avatar"
            color={"red"}
          >
            <Transformation height="50" width="50" />
          </Image>
          {capitalizeFirstLetter(params.row.nombre.toLowerCase())}
        </div>
      );
    },
  },
  /*   {
    field: "nombre",
    headerName: "Nombre",
    headerClassName: "super-app-theme--header",
    width: 300,
  }, */
  {
    align: "center",
    headerAlign: "center",
    field: "updatedAt",
    headerName: "Ultima actualización",
    headerClassName: "super-app-theme--header",
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

const Categorias = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarList = async () => {
    const resp = await fetchSinToken(`api/v1/categorias/?desde=0&limite=20`);

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
        <div className="categorias">
          <div className="categorias-container">
            <div className="datatable">
              <div className="datatableTitle">
                Categorías
                <Link to="/admin/RegisterCategoria" className="link">
                  Agregar una categoría
                </Link>
              </div>
              {/*               <div className="datatableTitle">Categorias</div>

              <div className="buttonPunto d-grid gap-2 d-md-flex justify-content-md-end">
                <Link
                  type="button"
                  className="btn btn-primary btn-left me-md-2"
                  to="/admin/RegisterPuntos"
                >
                  Registrar Categoria
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
                  "& .super-app-theme--cell": {
                    backgroundColor: "#045694",
                    color: "#fff",
                    fontWeight: "600",
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

export default Categorias;
