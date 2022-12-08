import "./inventory.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import Spinner from "../../../components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  cargarInventario,
  cleanStock,
  reloadingStock,
} from "../../../redux/actions/stock";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import { fetchConToken } from "../../../helpers/fetch";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const inventoryColumns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "super-app-theme--header",
    hide: true,
    width: 50,
  },
  {
    field: "productos",
    headerName: "Producto",
    headerClassName: "super-app-theme--header",
    flex: 3,
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
          {capitalizeFirstLetter(params.row.nombre.toLowerCase())}
        </div>
      );
    },
    valueGetter: (params) => params.row.nombre,
  },
  {
    field: "categoria",
    headerName: "Categoría",
    headerClassName: "super-app-theme--header",
    /*     renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {capitalizeFirstLetter(params.row.categoria.toLowerCase())}
        </div>
      );
    }, */
    flex: 1.5,
  },
  {
    field: "lote",
    headerName: "LOTE",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "cantidad",
    headerName: "Cantidad",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "punto",
    headerName: "Destino",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    field: "proveedor",
    headerName: "Proveedor",
    headerClassName: "super-app-theme--header",
    flex: 1.5,
  },
  /* {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  }, */
];

const Inventory = () => {
  const dispatch = useDispatch();

  const { loading, stock } = useSelector((state) => state.stockReducer);

  /* const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); */

  /*   const cargarInventario = async () => {
    const resp = await fetchSinToken(
      `api/v1/productos/inventario/?desde=0&limite=50`
    );

    const { total, inventario } = await resp.json();

    if (resp.ok) {
      setData(inventario);
      setLoading(false);
    }
  }; */

  useEffect(() => {
    dispatch(cargarInventario());
  }, []);

  const handleDelete = async (uid, id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta acción no tiene vuelta atras",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      fetchConToken(`api/v1/productos/${uid}/${id}`, {}, "DELETE").then(
        (data) => {
          if (result.isConfirmed && data.ok) {
            dispatch(cargarInventario());
            Swal.fire(
              "Borrado!",
              "El registro fue eliminado correctamente.",
              "success"
            );
          }
        }
      );
    });

    //setData(data.filter((item) => item.id !== id));
  };

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
            <Link to={`/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton" title="Ver">
                <VisibilityIcon style={{ fontSize: "18px" }} />
              </div>
            </Link>
            <div
              className="deleteButton"
              title="Borrar"
              onClick={() => {
                handleDelete(params.row.uid, params.row.id);
              }}
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
    <div className="stock">
      <div className="stock-container">
        <div className="datatable">
          <div className="datatableTitle">
            Inventario
            <Link
              to="/admin/stock/nuevo"
              className="link"
              onClick={() => dispatch(reloadingStock())}
            >
              Agregar
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
              rows={stock}
              columns={inventoryColumns.concat(actionColumn)}
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

export default Inventory;
