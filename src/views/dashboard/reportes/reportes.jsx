
import "./reportes.scss"
import { TablaReporte } from "../../../components/reporte/tablaReporte";
import Pdf from "react-to-pdf";
import { createRef } from "react";


const ref = createRef();
const options = {
    orientation: 'landscape',
    
};

export const ReportesView = () => {

    return (
        <>
    
            <div className="container-table-report">
                <div className="datatableTitle">
                    Reportes
                </div>
                <div ref={ref}>
                    <div className="titleDataReporte">
                        Ventas en los últimos seis meses
                    </div>
                    <TablaReporte />
                </div>

                <Pdf targetRef={ref} filename="document.pdf" options={options} x={10} y={10} scale={0.8}>
                    {({ toPdf }) => <button className="button-reporte" onClick={toPdf}>Descargar PDF</button>}
                </Pdf>

            </div>

        </>
    )
}