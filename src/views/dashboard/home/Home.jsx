import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import Widget from "../../../components/widget/Widget";
import Featured from "../../../components/featured/Featured";
import Chart from "../../../components/chart/Chart";
import "./home.scss";
import { useEffect, useState } from "react";
import { fetchSinToken } from "../../../helpers/fetch";
import Spinner from "../../../components/spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { cargarEstadisticas } from "../../../redux/actions/stats";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, ...resto } = useSelector((state) => state.statsReducer);

  /*   const [chart, setChart] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [productosMes, setProductosMes] = useState([]);
  const [semana, setSemana] = useState([]);
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true); */

  /*   const cargarStats = async () => {
    const resp = await fetchSinToken(`api/v1/ordenes/stats`);
    const { seisMeses, anteriorActualMes, productoMes, esteDia, estaSemana } =
      await resp.json();

    console.log(seisMeses, "seisMeses");
    console.log(anteriorActualMes, "anteriorActualMes");
    console.log(productoMes, "productoMes");
    console.log(esteDia, "esteDia");
    console.log(estaSemana, "estaSemana");

    if (resp.ok) {
      setChart(seisMeses);
      setIngresos(
        anteriorActualMes.sort((a, b) =>
          a._id > b._id ? 1 : b._id > a._id ? -1 : 0
        )
      );
      setProductosMes(productoMes);
      setSemana(estaSemana);
      setFeatures(esteDia);
      setLoading(false);
    }
  }; */
  useEffect(() => {
    dispatch(cargarEstadisticas());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="home">
      {resto ? (
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="usuarios" valores={resto} />
            <Widget type="productos" valores={resto} />
            <Widget type="ordenes" valores={resto} />
            <Widget type="ingresos" valores={resto} />
          </div>
          <div className="charts">
            <Featured
              dia={resto.ganaciaDia.length ? resto.ganaciaDia : [{ total: 0 }]}
              mes={resto.gananciaMesAnterior}
              semana={resto.ganaciaSemana}
            />
            <Chart
              title="Ingresos de los ultimos 6 meses"
              chartStats={resto.comparacionSeisUltimosMeses}
              aspect={2 / 1}
            />
          </div>
        </div>
      ) : (
        <div className="homeContainer">
          <div className="stats">No hay estadisticas disponibles</div>
        </div>
      )}
    </div>
  );
};

export default Home;
