
import "./reportes.scss"
import { TablaReporte } from "../../../components/reporte/tablaReporte";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { BarChartReporte, PieChartReporte } from "../../../components/chart/PieChart";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { cargarEstadisticas } from "../../../redux/actions/stats";
import Spinner from "../../../components/spinner/Spinner";

const ref = createRef();
const options = {
    orientation: 'landscape',
};

export const ReportesView = () => {

    const dispatch = useDispatch();
    const { loading, ...resto } = useSelector(state => state.statsReducer);
    const [dataIngresos, setDataIngresos] = useState([]);


    let arrayValoresTotales = [];
    let arrayValoresVentas = [];
    for (let key in dataIngresos) {
        arrayValoresTotales.push(dataIngresos[key].total);
        arrayValoresVentas.push(dataIngresos[key].cantVentas);
    }
    // console.log("array", arrayValoresTotales);
    // console.log("arrayCantVentas", arrayValoresVentas)

    useEffect(() => {
        dispatch(cargarEstadisticas());
        setDataIngresos(resto.comparacionSeisUltimosMeses);
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="container-table-report">
                <div className="titulo-y-boton">
                    <div className="datatableTitle">Reportes Ventas</div>
                    <Pdf targetRef={ref} filename="documentReporte.pdf" options={options} x={10} y={10} scale={0.8}>
                        {({ toPdf }) => <button className="button-reporte" onClick={toPdf}>Descargar PDF</button>}
                    </Pdf>
                </div>

                <div ref={ref}>
                    <div className="titleDataReporte">
                        En los últimos seis meses
                    </div>

                    <TablaReporte />

                    <div className="containerCharts">
                        <div style={{ "width": "40%" }}>
                            <PieChartReporte
                                dataTotal={arrayValoresTotales} />
                        </div>
                        <div style={{ "width": "55%", "margin": "auto" }}>
                            <BarChartReporte
                                cantVentas={arrayValoresVentas}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}