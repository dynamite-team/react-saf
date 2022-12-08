
import "./reportes.scss"
import { TablaReporte } from "../../../components/reporte/tablaReporte";
import Pdf from "react-to-pdf";
import { createRef } from "react";
import { BarChartReporte, PieChartReporte } from "../../../components/chart/PieChart";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";


const ref = createRef();
const options = {
    orientation: 'landscape',
};

export const ReportesView = () => {

    const { comparacionSeisUltimosMeses } = useSelector(state => state.statsReducer);
    const [dataIngresos, setDataIngresos] = useState([]);

    useEffect(() => {
        setDataIngresos(comparacionSeisUltimosMeses);
    })

    let arrayValoresTotales = [];
    let arrayValoresVentas = [];
    for (let key in dataIngresos) {
        arrayValoresTotales.push(dataIngresos[key].total);
        arrayValoresVentas.push(dataIngresos[key].cantVentas);
    }
    // console.log("array", arrayValoresTotales);
    // console.log("arrayCantVentas", arrayValoresVentas)

    return (
        <>

            <div className="container-table-report">
                <div className="titulo-y-boton">
                    <div className="datatableTitle">
                        Reportes Ventas
                    </div>
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
                            <PieChartReporte dataTotal={arrayValoresTotales} />
                        </div>
                        <div style={{ "width": "55%", "margin": "auto" }}>
                            <BarChartReporte
                                cantVentas={arrayValoresVentas}
                                dataTotal={arrayValoresTotales}
                            />
                        </div>
                    </div>


                </div>





            </div>

        </>
    )
}