import { combineReducers } from "redux";

import buscadorUsuario from "./login";
import registro from "./registro";
import usuario from "./verUsuarios";
import productos from "./productos";
import categoria from "./verCategorias";
import producto from "./verProductos";
import punto from "./verPuntos";
import profile from "./VerProfile";

import { authReducer } from "./authReducer";
import { shoppingReducer } from "./shoppingReducer";
import { stockReducer } from "./stockReducer";

export default combineReducers({
  authReducer,
  shoppingReducer,
  stockReducer,

  buscadorUsuario,
  categoria,
  registro,
  usuario,
  producto,
  productos,
  profile,
  punto,
});
