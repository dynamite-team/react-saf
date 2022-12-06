import "./order.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import Spinner from "../../../components/spinner/Spinner";
import Box from "@mui/material/Box";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const orderColumns = [
  {
    field: "id",
    headerName: "ID",
    hide: true,
    width: 50,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "usuario",
    headerName: "Vendedor",
    headerClassName: "super-app-theme--header",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <Image
            className="cellImg"
            cloudName="dawjd5cx8"
            publicId={params.row.img}
            alt="avatar"
          >
            <Transformation
              height="30"
              width="30"
              radius="max"
              aspectRatio="1.5"
              crop="fill"
            />
          </Image>
          {`${capitalizeFirstLetter(
            params.row.nombre.toLowerCase()
          )} ${capitalizeFirstLetter(params.row.apellido.toLowerCase())}`}
        </div>
      );
    },
  },
  {
    field: "punto",
    headerName: "Lugar",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "montoTotal",
    headerClassName: "super-app-theme--header",
    headerName: "Monto ($)",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "createdAt",
    headerClassName: "super-app-theme--header",
    headerName: "Fecha de emisión",
    flex: 1,
  },
];

const Order = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarOrdenes = async () => {
    const resp = await fetchSinToken(`api/v1/ordenes/?desde=0&limite=50`);

    const { total, ordenes } = await resp.json();

    if (resp.ok) {
      setData(ordenes);
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  const handleDelete = (uid) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta acción no tiene vuelta atras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      fetchConToken(`api/v1/ordenes/${uid}`, {}, "DELETE").then((data) => {
        if (result.isConfirmed && data.ok) {
          dispatch(cargarOrdenes());
          Swal.fire(
            "Borrado!",
            "El registro fue eliminado correctamente.",
            "success"
          );
        }
      });
    });
  };

  const actionColumn = [
    {
      align: "center",
      headerAlign: "center",
      field: "action",
      headerClassName: "super-app-theme--header",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/venta/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton" title="Ver">
                <VisibilityIcon style={{ fontSize: "18px" }} />
              </div>
            </Link>
            <div
              className="deleteButton"
              title="Borrar"
              onClick={() => handleDelete(params.row.uid)}
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
    <div className="order">
      <div className="order-container">
        <div className="datatable">
          <div className="datatableTitle">Registro de ventas</div>

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
              columns={orderColumns.concat(actionColumn)}
              autoHeight
              pageSize={8}
              rowsPerPageOptions={[8]}
              checkboxSelection={false}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Order;
