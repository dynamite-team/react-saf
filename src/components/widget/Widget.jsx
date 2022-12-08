import "./widget.scss";
import { Image, Transformation } from "cloudinary-react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

/* const compare = (a, b) => (a._id > b._id ? 1 : b._id > a._id ? -1 : 0); */

const Widget = ({
  type,
  valores: {
    productosMesAnteriorActual,
    comparacionMesAnteriorActual,
    productoMasVendidoMes,
  },
}) => {
  let data, amount, diff;

  switch (type) {
    case "usuarios":
      data = {
        title: "PRODUCTO ESTRELLA",
        isMoney: false,
        //link: "Ver todos los usuarios",
        link: `${productoMasVendidoMes[0].nombre}`,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      amount = productoMasVendidoMes[0];
      break;
    case "productos":
      data = {
        title: "PRODUCTOS VENDIDOS",
        isMoney: false,
        link: "Ver todos los productos",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      amount = productosMesAnteriorActual[1].productos;
      diff =
        ((productosMesAnteriorActual[1].productos -
          productosMesAnteriorActual[0].productos) /
          productosMesAnteriorActual[0].productos) *
        100;
      break;
    case "ordenes":
      data = {
        title: "VENTAS REALIZADAS",
        isMoney: false,
        link: "Ver todas las ventas",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      /* valoresSort = valores.sort(compare); */
      amount = comparacionMesAnteriorActual[1].ordenes;
      diff =
        ((comparacionMesAnteriorActual[1].ordenes -
          comparacionMesAnteriorActual[0].ordenes) /
          comparacionMesAnteriorActual[0].ordenes) *
        100;
      break;
    case "ingresos":
      data = {
        title: "INGRESOS DEL MES",
        isMoney: true,
        link: "Ver los detalles",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      /* valoresSort = valores.sort(compare); */
      amount = comparacionMesAnteriorActual[1].total;
      diff =
        ((comparacionMesAnteriorActual[1].total -
          comparacionMesAnteriorActual[0].total) /
          comparacionMesAnteriorActual[0].total) *
        100;
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="widget-left">
        <span className="title">{data.title}</span>
        {type === "usuarios" ? (
          <span className="counter">
            <Image
              cloudName="dawjd5cx8"
              publicId={productoMasVendidoMes[0].img}
            >
              <Transformation
                height="60"
                width="60"
                aspectRatio="1.5"
                crop="fill"
              />
            </Image>
          </span>
        ) : (
          <span className="counter">
            {data.isMoney && "$"} {amount}
          </span>
        )}
        <span className="link">{data.link}</span>
      </div>
      {type !== "usuarios" && (
        <div className="widget-right">
          {diff && diff <= 0 ? (
            <div className="percentage negative">
              <KeyboardArrowDown />
              {diff.toFixed()} %
            </div>
          ) : (
            <div className="percentage positive">
              <KeyboardArrowUpIcon />
              {diff && diff.toFixed()} %
            </div>
          )}
          {data.icon}
        </div>
      )}
    </div>
  );
};

export default Widget;
