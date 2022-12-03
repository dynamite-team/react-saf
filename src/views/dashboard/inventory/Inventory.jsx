import "./inventory.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import Spinner from "../../../components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { cargarInventario, cleanStock } from "../../../redux/actions/stock";
import Box from "@mui/material/Box";
const inventoryColumns = [
  {
    field: "id",
    headerName: "ID",
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
  },
  {
    field: "categoria",
    headerName: "Categoría",
    headerClassName: "super-app-theme--header",
    flex: 1.5,
  },
  {
    field: "lote",
    headerName: "LOTE",
    headerClassName: "super-app-theme--header",
    flex: 0.5,
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    field: "cantidad",
    headerName: "Cantidad",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
    field: "unidad",
    headerName: "Unidad",
    flex: 1,
  },
  {
    field: "punto",
    headerName: "Destino",
    headerClassName: "super-app-theme--header",
    flex: 2,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "proveedor",
    headerName: "Proveedor",
    headerClassName: "super-app-theme--header",
    flex: 1.5,
  },
];

const Inventory = () => {
  const dispatch = useDispatch();

  const { loading, stock } = useSelector((state) => state.stockReducer);

  useEffect(() => {
    dispatch(cargarInventario());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    //setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      align: "center",
      headerAlign: "center",
      field: "action",
      headerClassName: "super-app-theme--header",
      headerName: "Action",
      flex: 1.5,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${params.row.id}`} style={{ textDecoration: "none" }}>
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
    <div className="stock">
      <div className="stock-container">
        <div className="datatable">
          <div className="datatableTitle">
            Inventario
            <Link
              to="/admin/stock/nuevo"
              className="link"
              onClick={() => dispatch(cleanStock())}
            >
              Agregar
            </Link>
          </div>
          {/*           <div className="datatableTitle">
            Inventario

          </div>

          <div class="buttonInven d-grid gap-2 d-md-flex justify-content-md-end">
            <Link
              type="button"
              className="btn btn-primary btn-left me-md-2"
              to="/admin/stock/nuevo"
              onClick={() => dispatch(cleanStock())}
            >
              Agregar
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
              rows={stock}
              columns={inventoryColumns.concat(actionColumn)}
              pageSize={7}
              rowsPerPageOptions={[7]}
              checkboxSelection={false}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
