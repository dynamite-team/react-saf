import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import Spinner from "../../../components/spinner/Spinner";
import { fetchConToken } from "../../../helpers/fetch";
import "./singleOrder.scss";

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
        <div className="single-order-top">
          <div className="single-order-wrapper-top">
            <div className="single-order-detalle">
              <b>Vendedor:</b> <br />
              {data.usuario.nombre}
            </div>
            <div className="single-order-detalle">
              <b>Fecha de emisión:</b> <br />
              {data.createdAt}
            </div>
          </div>
        </div>
        <div className="single-order-bottom">
          <div className="single-order-wrapper">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
