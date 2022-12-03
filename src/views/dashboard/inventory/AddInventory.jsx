import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Image, Transformation } from "cloudinary-react";
import { fetchSinToken } from "../../../helpers/fetch";
import { useForm } from "../../../hooks/useForm";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Spinner from "../../../components/spinner/Spinner";
import Searching from "../../../components/searching/Searching";
import "./addInventory.scss";
import {
  asignarStock,
  buscador,
  cargarProductos,
  cargarProveedores,
  confirmarStock,
  productoSeleccionado,
} from "../../../redux/actions/stock";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddInventory = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    loading,
    disabled,
    disabledLote,
    selects,
    searching,
    found,
    stockUpdate,
  } = useSelector((state) => state.stockReducer);

  //const [selects, setSelects] = useState({});
  //const [loading, setLoading] = useState(true);
  const [encontrado, setEncontrado] = useState();
  const [buscando, setBuscando] = useState(false);

  //console.log(encontrado, "encontrado");

  const [formValues, handleInputChange, reset] = useForm({
    producto: "",
    proveedor: "",
    lote: "",
    punto: "",
    cantidad: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asignarStock(cantidadList));
    /* let newItem =
      encontrado.destino.find((puntos) => puntos.punto === destino.uid) ||
      state.cart.find((product) => product.uid === action.payload.id); */
  };

  const { producto, proveedor, lote, cantidad, punto } = formValues;

  const [cantidadList, setCantidadList] = useState([
    { punto: "", cantidad: "" },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...cantidadList];
    list[index][name] = value;
    setCantidadList(list);
  };

  const handleDelete = (index) => {
    const list = [...cantidadList];
    list.splice(index, 1);
    setCantidadList(list);
  };

  const handleAdd = () => {
    setCantidadList([...cantidadList, { punto: "", cantidad: "" }]);
  };

  /*   const cargarInformacion = async () => {
    const resp = await fetchSinToken(`api/v1/productos?desde=0&limite=100`);

    const { productos, categorias, destinos, lotes, productores, disponibles } =
      await resp.json();

    if (resp.ok) {
      setSelects({ ...selects, destinos, lotes, productores, disponibles });
      setLoading(false);
    }
  }; */

  /*   const cargarProveedores = async () => {
    const resp = await fetchSinToken(
      `api/v1/usuarios/?desde=0&hasta=5&rol=productor`
    );
    const { total, usuarios } = await resp.json();

    if (resp.ok) {
      setSelects({ ...selects, usuarios });
      setLoading(false);
    }
  }; */

  /*   const buscador = async (producto, proveedor, lote) => {
    setBuscando(true);
    const resp = await fetchSinToken(
      `api/v1/buscar/productos/${producto}/?proveedor=${proveedor}&lote=${lote}`
    );

    const { results } = await resp.json();

    if (resp.ok) {
      setEncontrado(results[0]);
    }

    setBuscando(false);
  }; */

  useEffect(() => {
    dispatch(cargarProveedores());
  }, []);

  useEffect(() => {
    producto &&
      proveedor &&
      lote &&
      dispatch(buscador(producto, proveedor, lote));
  }, [producto, proveedor, lote]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="stock">
      <div className="stock-container">
        <div className="stock-top">
          <div className="stock-top-text">Agregar al inventario:</div>
        </div>
        <div className="stock-bottom">
          <div className="left">
            {searching ? (
              <Searching />
            ) : found ? (
              <>
                <Image
                  className="cellImg"
                  cloudName="dawjd5cx8"
                  publicId={found.img}
                  alt="avatar"
                >
                  <Transformation
                    height="100"
                    width="100"
                    //radius="max"
                    aspectRatio="1.5"
                    crop="fill"
                  />
                </Image>
                <div className="step--1">Producto encontrado 👍</div>
              </>
            ) : (
              <>
                <Image
                  className="cellImg"
                  cloudName="dawjd5cx8"
                  publicId="saf/not-found/not-found_sxh8ev"
                  alt="avatar"
                >
                  <Transformation
                    height="100"
                    width="100"
                    //radius="max"
                    aspectRatio="1.5"
                    crop="fill"
                  />
                </Image>
                <div className="step--1">Nada por aquí...</div>
              </>
            )}
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Completa el formulario
                  <DriveFileRenameOutlineIcon className="icon" />
                </label>
              </div>
              <div className="formInput">
                <label>
                  <b>Proveedor</b> <span>*</span>
                </label>
                <select
                  name="proveedor"
                  className="styled-select semi-square"
                  onChange={(e) => {
                    handleInputChange(e);
                    dispatch(cargarProductos(e.target.value));
                  }}
                >
                  <option>Seleccione un proveedor...</option>
                  {selects.supplier.map(({ uid, nombre }) => (
                    <option value={uid} key={uid}>
                      {nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="formInput">
                <label>Productos</label>
                <select
                  name="producto"
                  className="styled-select semi-square"
                  onChange={(e) => {
                    handleInputChange(e);
                    dispatch(productoSeleccionado(e.target.value));
                  }}
                  disabled={disabled}
                >
                  <option>Seleccione un producto...</option>
                  {selects.products?.map((productos) => (
                    <option value={productos.uid} key={productos.nombre}>
                      {productos.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="formInput">
                <label>LOTE</label>
                <select
                  name="lote"
                  className="styled-select semi-square"
                  onChange={handleInputChange}
                  disabled={disabledLote}
                >
                  <option>Seleccione un LOTE...</option>
                  {selects.lotes?.map((lote) => (
                    <option value={lote} key={lote}>
                      {lote}
                    </option>
                  ))}
                </select>
              </div>

              {cantidadList.map((data, i) => (
                <React.Fragment key={i}>
                  <div className="formInput">
                    <label>Destino</label>
                    <select
                      name="punto"
                      className="styled-select semi-square"
                      onChange={(e) => handleChange(e, i)}
                      disabled={disabled}
                    >
                      <option>Seleccione un destino...</option>
                      {selects.points?.map(({ uid, nombre }) => (
                        <option value={uid} key={uid}>
                          {nombre}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div
                    className="formInput"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <label>Cantidad</label>
                    <input
                      type="text"
                      name="cantidad"
                      value={data.cantidad}
                      onChange={(e) => handleChange(e, i)}
                      placeholder="Ingrese una cantidad..."
                      disabled={disabled}
                    />
                    <button
                      type="submit"
                      style={{ backgroundColor: "crimson", margin: "1rem" }}
                      onClick={() => {
                        handleDelete(i);
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </React.Fragment>
              ))}

              <button
                type="submit"
                style={{ backgroundColor: "green", margin: "1rem" }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Confirmar
              </button>
              <button type="button" onClick={handleAdd}>
                Agregar otro destino
              </button>
            </form>
          </div>
        </div>
        <div className="bottom-button">
          <button
            type="submit"
            onClick={() => {
              confirmarStock(stockUpdate);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Registro agregado correctamente",
                showConfirmButton: false,
                timer: 1500,
              }).then((data) => navigate("/stock"));
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddInventory;
