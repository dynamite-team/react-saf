import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
);

const labels = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

export const PieChartReporte = ({ dataTotal }) => {

    const data = {
        labels,
        datasets: [
            {
                data: dataTotal,
                backgroundColor: ["aqua", "orange", "purple", "yellow", "blue", "green", "pink"]
            }
        ],

    };

    const options = {
        responsive: true
    }
    return (

        <Pie width={600} height={600} data={data} options={options} />

    )
};

export const BarChartReporte = ({ cantVentas }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico total de ventas',
            },
        },
    };


    const data = {
        labels,
        datasets: [
            {
                label: 'Cantidad de Ordenes',
                data: cantVentas,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <Bar data={data} options={options} />
    )

}