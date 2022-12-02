import "./order.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import Spinner from "../../../components/spinner/Spinner";
import Box from '@mui/material/Box';
const orderColumns = [
  {
    field: "id",
    headerName: "ID",
    hide: true,
    width: 50,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: "usuario",
    headerName: "Vendedores",
    headerClassName: 'super-app-theme--header',
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
          {capitalizeFirstLetter(params.row.usuario.toLowerCase())}
        </div>
      );
    },
  },
  {
    field: "punto",
    headerName: "Lugar",
    headerClassName: 'super-app-theme--header',
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "montoTotal",
    headerClassName: 'super-app-theme--header',
    headerName: "Monto ($)",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "createdAt",
    headerClassName: 'super-app-theme--header',
    headerName: "Fecha de emisión",
    flex: 2,
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

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      align: "center",
      headerAlign: "center",
      field: "action",
      headerClassName: 'super-app-theme--header',
      headerName: "Action",
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="order">
      <div className="order-container">
        <div className="datatable">
          <div className="datatableTitle">Ordenes</div>

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
            columns={orderColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
          />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Order;
