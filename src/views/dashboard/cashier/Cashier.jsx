import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAmount } from "../../../helpers/amount";
import { capitalizeFirstLetter } from "../../../helpers/capitalize-first-letter";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Card from "../../../components/card/Card";
import List from "../../../components/list/List";
import Spinner from "../../../components/spinner/Spinner";
import {
  cargarProductos,
  clearCart,
  cleanUp,
  createOrden,
  filterProducts,
  getRemaining,
  submitOrder,
} from "../../../redux/actions/shopping";
import "./cashier.scss";
import { useForm } from "../../../hooks/useForm";

const Cashier = () => {
  /*  const {
    state: { uid, designado, nombre },
  } = useContext(AuthContext); */

  const dispatch = useDispatch();
  const { designado, nombre, rol } = useSelector((state) => state.authReducer);

  const {
    products,
    cart,
    categories,
    orden,
    loading,
    reload,
    remaining,
    puntos,
  } = useSelector((state) => state.shoppingReducer);

  const [formValues, handleInputChange, reset] = useForm({
    punto: "",
  });

  const { punto } = formValues;

  /* const [{ products, cart, categories, orden, loading, reload }, dispatch] =
    useReducer(shoppingRecuder, shoppingInitialState); */

  //PONERLO EN EL REDUCER
  /* let cambioInicial = 0;
  const [cambio, setCambio] = useState(cambioInicial); */

  /* const cargarProductos = async () => {
    const resp = await fetchSinToken(
      `api/v1/productos?desde=0&limite=20&punto=${designado}`
    );

    const { productos, categorias } = await resp.json();

    if (resp.ok) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: { productos, categorias },
      });
    }
  }; */

  const handleChange = (e) => {
    //setCambio(e.target.value);
    //dispatch(remaining(e.target.value));
    dispatch(getRemaining(e.target.value));
  };

  /* const addCart = (id) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: { id, punto: designado },
    });
  }; */

  /*  const filterProducts = (categoria) => {
    categoria === "clear"
      ? dispatch({
          type: TYPES.CLEAR_FILTER_PRODUCT,
        })
      : dispatch({
          type: TYPES.FILTER_PRODUCT,
          payload: categoria,
        });
  }; */

  /* const delFromCart = (id, all = false) => {
    if (all) {
      dispatch({
        type: TYPES.REMOVE_ALL_FROM_CART,
        payload: { id, punto: designado },
      });
    } else {
      dispatch({
        type: TYPES.REMOVE_ONE_FROM_CART,
        payload: { id, punto: designado },
      });
    }
  }; */

  /* const clearCart = () => {
    setCambio(efectivoInitial);
    dispatch({
      type: TYPES.CLEAR_CART,
    });
  }; */

  /*   const submitOrder = async () => {
    if (cart.length != 0) {
      const resp = await fetchConToken(
        "api/v1/ordenes",
        { cart, orden },
        "POST"
      );

      if (resp.ok) {
        console.log("??xito");
        dispatch({
          type: TYPES.SUBMIT_ORDER,
        });
        //AGREGAR UNA NOTIFICACI??N DE ??XITO
      }
    } else {
      //AGREGAR UNA NOTIFICACI??N DE CARRITO VACIO
      console.log("carrito vacio");
    }
  }; */

  useEffect(() => {
    dispatch(cargarProductos(designado));
  }, [reload]);

  useEffect(() => {
    /* dispatch({
      type: "CREATE_ORDER",
      payload: { designado, montoTotal: getAmount(cart) },
    }); */
    dispatch(createOrden(designado, cart));
  }, [cart]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="cashier">
      <div className="cashier-left">
        <div className="navbar-cashier">
          <div className="button-title">
            <Link
              style={{ textDecoration: "none" }}
              to="/admin"
              onClick={() => {
                dispatch(cleanUp());
              }}
            >
              <ArrowBackIosNewIcon />
            </Link>
            <div className="title step-2">Punto de venta</div>
          </div>
          {rol === "admin" && (
            <div className="title">
              <select
                name="punto"
                className="styled-select semi-square"
                defaultValue="default"
                onChange={(e) => {
                  handleInputChange(e);
                  dispatch(cargarProductos(e.target.value));
                }}
              >
                <option value="default" disabled>
                  Seleccione una localizaci??n...
                </option>
                {puntos.map(({ uid, nombre, departamento }) => (
                  <option value={uid} key={uid}>
                    {`${nombre} - ${departamento}`}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="title step-0">Hola, {nombre} ???????</div>
        </div>
        <div className="navbar-categories">
          {categories.map((item) => (
            <button
              className="step--1"
              key={item}
              onClick={() => {
                dispatch(filterProducts(item));
              }}
            >
              {capitalizeFirstLetter(item.toLowerCase())}
            </button>
          ))}
          <button
            className="step--1"
            onClick={() => {
              dispatch(filterProducts("clear"));
            }}
          >
            Limpiar
          </button>
        </div>
        <div className="card-wrapper">
          {!products.length ? (
            <div className="vacio">
              <p>Nada por aqu??... ????</p>
            </div>
          ) : (
            products.map((item) => (
              <Card
                key={item.uid}
                //addCart={addCart}
                designado={punto || designado}
                cart={cart}
                {...item}
              />
            ))
          )}
        </div>
      </div>
      <div className="cashier-right">
        <div className="list-wrapper">
          {cart.length ? (
            cart.map((item) => (
              <List
                key={item.uid}
                //addCart={addCart}
                //delFromCart={delFromCart}
                destino={item.destino}
                designado={punto || designado}
                {...item}
              />
            ))
          ) : (
            <div className="vacio">
              <p>Nada por aqu??... ????</p>
            </div>
          )}
        </div>
        <div className="list-amount">
          <div className="list-amount-contenido-left">
            <div className="grid-left">Monto:</div>
            <div className="grid-left">Efectivo:</div>
            <div className="grid-left">Cambio:</div>
            <div className="grid-left">
              <button
                onClick={() => {
                  dispatch(submitOrder(cart, orden));
                  dispatch(clearCart());

                  Swal.fire({
                    icon: "success",
                    title: "Venta realizada con ??xito",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              >
                Enviar
              </button>
            </div>
          </div>
          <div className="list-amount-contenido">
            <div className="grid">${getAmount(cart)}</div>
            <div className="grid">
              <input
                type="number"
                name="efectivo"
                id="efectivo"
                value={remaining}
                onChange={handleChange}
              />
            </div>
            <div className="grid">
              $
              {remaining > getAmount(cart) && getAmount(cart) != 0
                ? remaining - getAmount(cart)
                : 0}
            </div>
            <div className="grid">
              <button
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;
