
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const TablaReporte = () => {
  const MONTHS = useMemo(
    () => [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    []
  );

  const [dataReportes, setDataReportes] = useState([]);

  const { comparacionSeisUltimosMeses } = useSelector((state) => state.statsReducer);

  let sumaTotales = 0;
  let sumaOrdenes = 0;
  const totales = dataReportes.map((element) => {
    sumaTotales = sumaTotales + element.total;
    sumaOrdenes = sumaOrdenes + element.cantVentas;
  });

  useEffect(() => {
    setDataReportes(comparacionSeisUltimosMeses);
  }, []);

//   console.log(dataReportes);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nro</th>
            <th scope="col">Mes</th>
            <th scope="col">Cantidad de Ventas</th>
            <th scope="col">Montos</th>
            <th scope="col">% Ventas respecto al mes pasado</th>
          </tr>
        </thead>
        <tbody>
          {dataReportes.map((element, i) => {
            const nombreMes = MONTHS[element._id - 1];
            // console.log("e", element, "i", i);
            return (
              <tr key={i}>
                <td scope="row">{element._id}</td>
                <td>{nombreMes}</td>
                <td>{element.cantVentas}</td>
                <td>${element.total}</td>
                <td>
                  {i == 0
                    ? 0
                    : Math.round(
                        ((dataReportes[i].total - dataReportes[i - 1].total) /
                          dataReportes[i - 1].total) *
                          100
                      )}
                  %
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot style={{ backgroundColor: "#045694", color: "white" }}>
          <tr>
            <td scope="row"></td>
            <td scope="row">TOTALES</td>
            <td scope="row">{sumaOrdenes}</td>
            <td scope="row">${sumaTotales}</td>
            <td scope="row"></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
