import "./list.scss";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchSinToken } from "../../../helpers/fetch";
//import { capitalizeFirstLetter } from "../../helpers/capitalize-first-letter";
//import Spinner from "../../layout/Spinner";
//import axios from "axios";

const columns = [
  { field: "uid", headerName: "ID" },
  { field: "usuario", headerName: "Vendedor", width: 300 },
  { field: "punto", headerName: "Punto", width: 300 },
  { field: "montoTotal", headerName: "Monto Total", width: 300 },
];

const List = () => {
  const [data, setData] = useState([]);

  const cargarOrdenes = async () => {
    const resp = await fetchSinToken(`api/v1/ordenes/?desde=0&limite=50`);

    const { ordenes } = await resp.json();

    if (resp.ok) {
      setData(ordenes);
    }
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  console.log(data);

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default List;
