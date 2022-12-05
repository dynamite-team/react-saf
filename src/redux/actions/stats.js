import { fetchSinToken, fetchConToken } from "../../helpers/fetch";
import { TYPES } from "../tipos/types";
import Swal from "sweetalert2";

export const cargarEstadisticas = () => {
  return async (dispatch) => {
    const resp = await fetchSinToken(`api/v1/ordenes/stats`);
    const {
      comparacionSeisUltimosMeses,
      comparacionMesAnteriorActual,
      productosMesAnteriorActual,
      gananciaMesAnterior,
      ganaciaSemana,
      ganaciaDia,
      productoMasVendidoMes,
    } = await resp.json();

    if (resp.ok) {
      dispatch(
        agregarEstadisticas(
          comparacionSeisUltimosMeses,
          comparacionMesAnteriorActual,
          productosMesAnteriorActual,
          gananciaMesAnterior,
          ganaciaSemana,
          ganaciaDia,
          productoMasVendidoMes
        )
      );
    }
  };
};

const agregarEstadisticas = (
  comparacionSeisUltimosMeses,
  comparacionMesAnteriorActual,
  productosMesAnteriorActual,
  gananciaMesAnterior,
  ganaciaSemana,
  ganaciaDia,
  productoMasVendidoMes
) => ({
  type: TYPES.ADD_STATS,
  payload: {
    comparacionSeisUltimosMeses,
    comparacionMesAnteriorActual,
    productosMesAnteriorActual,
    gananciaMesAnterior,
    ganaciaSemana,
    ganaciaDia,
    productoMasVendidoMes,
  },
});
