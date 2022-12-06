import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Spinner from "../../../components/spinner/Spinner";
import { fetchConToken } from "../../../helpers/fetch";
import "./singleOrder.scss";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";

const orderColumns = [
  {
    field: "_id",
    headerName: "ID",
    hide: true,
    width: 50,
    headerClassName: "super-app-theme--header",
  },
  /*   {
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
          {capitalizeFirstLetter(params.row.usuario.toLowerCase())}
        </div>
      );
    },
  }, */
  {
    field: "producto",
    headerName: "Descripcion",
    headerClassName: "super-app-theme--header",
    flex: 2,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <Image
            className="cellImg"
            cloudName="dawjd5cx8"
            publicId={params.row.producto.img}
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
          {params.row.producto.descripcion} <br />{" "}
          {`Lote: ${params.row.producto.lote}`}
        </div>
      );
    },
    valueGetter: (params) => params.row.producto.descripcion,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "precio",
    headerClassName: "super-app-theme--header",
    headerName: "Precio Unitario ($)",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",
    field: "cantidad",
    headerClassName: "super-app-theme--header",
    headerName: "Cantidad",
    flex: 1,
  },
  {
    align: "center",
    headerAlign: "center",

    headerClassName: "super-app-theme--header",
    headerName: "Precio ($)",
    flex: 1,

    renderCell: (params) => {
      return (
        <div className="cellWithImg" key={params.row._id}>
          {params.row.cantidad * params.row.precio}
        </div>
      );
    },
  },
  /*   {
    align: "center",
    headerAlign: "center",
    field: "createdAt",
    headerClassName: "super-app-theme--header",
    headerName: "Fecha de emisión",
    flex: 1,
  }, */
];

const SingleOrder = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  const cargarOrden = async () => {
    const resp = await fetchConToken(`api/v1/ordenes/${id}`);

    const orden = await resp.json();

    if (resp.ok) {
      setData(orden);
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarOrden();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="single-order">
      <div className="single-order-container">
        <div className="single-order-top">
          <div className="single-order-top-text">Detalles de la venta:</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="single-order-top">
            <div className="single-order-wrapper-top">
              <div className="single-order-detalle">
                <div style={{ fontSize: "1.5rem" }}>
                  <b>Vendedor:</b>
                </div>
                <div
                  style={{
                    display: "flex",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Image
                    className="cellImg"
                    cloudName="dawjd5cx8"
                    publicId={data.usuario.img}
                    alt="avatar"
                  >
                    <Transformation
                      height="100"
                      width="100"
                      radius="max"
                      aspectRatio="1.5"
                      crop="fill"
                    />
                  </Image>
                  <div style={{ marginLeft: "1rem" }}>
                    <div>
                      <b>Usuario:</b>
                    </div>
                    <div>{data.usuario.usuario}</div>
                    <div>
                      <b>Nombre completo:</b>
                    </div>
                    <div>{`${data.usuario.nombre} ${data.usuario.apellido}`}</div>
                  </div>
                </div>
              </div>
              <div className="single-order-detalle">
                <b>Punto de venta:</b> <br />
                {data.punto.nombre}
              </div>
              <div className="single-order-detalle">
                <b>Fecha de emisión:</b> <br />
                {data.createdAt.slice(0, 10)}
              </div>
            </div>
          </div>
          <div className="single-order-bottom">
            <div className="datatable">
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
                  rows={data.productos}
                  columns={orderColumns}
                  getRowId={(row) => row._id}
                  autoHeight
                  hideFooter={true}
                  pageSize={7}
                  rowsPerPageOptions={[7]}
                  checkboxSelection={false}
                />
              </Box>
              <div
                className="single-order-list"
                style={{
                  backgroundColor: "#003667",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div className="single-order-img"></div>
                <div className="single-order-descripcion"></div>
                <div className="single-order-descripcion"></div>
                <div className="single-order-descripcion"></div>
                <div className="single-order-cantidad">Monto Total</div>
                <div className="single-order-precio">${data.montoTotal}</div>
              </div>
            </div>

            {/*           <div className="single-order-wrapper">
            <div
              className="single-order-list"
              style={{
                backgroundColor: "#003667",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <div className="single-order-img"></div>
              <div className="single-order-descripcion">Producto</div>
              <div className="single-order-cantidad">Cantidad</div>
              <div className="single-order-precio">Precio</div>
            </div>
            {data.productos.map((producto) => (
              <div className="single-order-list" key={producto._id}>
                <div className="single-order-img">
                  <Image cloudName="dawjd5cx8" publicId={producto.producto.img}>
                    <Transformation
                      height="100"
                      width="100"
                      radius="max"
                      aspectRatio="1.5"
                      crop="fill"
                    />
                  </Image>
                </div>
                <div className="single-order-descripcion">
                  {producto.producto.descripcion}
                </div>
                <div className="single-order-cantidad">{`${producto.cantidad} ${producto.producto.unidad}`}</div>
                <div className="single-order-precio">${producto.precio}</div>
              </div>
            ))}
            <div
              className="single-order-list"
              style={{
                backgroundColor: "#003667",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <div className="single-order-img"></div>
              <div className="single-order-descripcion"></div>
              <div className="single-order-cantidad">Monto Total</div>
              <div className="single-order-precio">${data.montoTotal}</div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
