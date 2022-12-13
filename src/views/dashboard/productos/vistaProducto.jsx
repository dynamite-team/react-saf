// import { useDispatch, useSelector } from "react-redux"
import { Image, Transformation } from "cloudinary-react";
import './productoVista.scss';
import { useEffect, useState } from "react";
// import { getProducto } from "../../../redux/actions/verProductos";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import { fetchConToken } from "../../../helpers/fetch";

export const VistaProducto = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (id) => {
        const res = await fetchConToken(`api/v1/productos/${id}`);
        const body = await res.json();
        setData(body);
        console.log("ssssssssssssssssssssss",body)
      
    }
    console.log("body2", data)
    const { nombre, precio, categoria, descripcion, lote, destino, disponible, createdAt, img, proveedor, unidad } = data;
    const fechaCreacion = new Date(createdAt).toLocaleDateString();
    console.log("destino", destino)
    console.log("categoria", categoria)
    useEffect(() => {
        fetchData();
        setLoading(false)
    }, [])

    // if (loading) {
    //     return <Spinner />
    // }

    return (
        <>
            {
                loading ? <Spinner />
                    :
                    <>
                        <div className="singleContainerProducto">
                            HOLA ASDKAJSDAD
                            <div className="rowProfileProducto">

                                <div className="contenedor-infoProducto">
                                    <h4 className="title-perfilProducto">Informacion del producto</h4>

                                    <div className="imagen-perfil" style={{ "width": "35%", "margin": "auto" }}>
                                        <Image cloudName="dawjd5cx8" publicId={img ? img : "saf/not-found/sin-fotos_tl1rkz"}>
                                            <Transformation
                                                height="200"
                                                width="200"
                                                radius="max"
                                                aspectRatio="1.5"
                                                crop="fill"
                                            />
                                        </Image>

                                    </div>
                                    <hr style={{ "borderWidth": "2px", "backgroundColor": "#4267b2" }} />
                                    <div className="info-perfil">
                                        {
                                            nombre &&
                                            <>
                                                <label className="label-info">Nombre del producto</label>
                                                <p className="info">{nombre}</p>
                                            </>
                                        }

                                        <label className="label-info">Categoria</label>
                                        <p className="info">{categoria.nombre}</p>
                                        <label className="label-info">Descripción</label>
                                        <p className="info">{descripcion}</p>
                                        <label className="label-info">Precio</label>
                                        <p className="info">{precio}</p>
                                        <label className="label-info">Lote</label>
                                        <p className="info">{lote}</p>
                                        <label className="label-info">Se vende por: </label>
                                        <p className="info">{unidad}</p>
                                        <label className="label-info">Disponibilidad</label>
                                        {
                                            disponible ?
                                                <p className="info" style={{ "color": "green" }}>Disponible ✔️</p>
                                                :
                                                <p className="info" style={{ "color": "red" }}>No disponible ❌</p>

                                        }
                                        <label className="label-info">Creado el dia</label>
                                        {
                                            createdAt &&
                                            <>
                                                <p className="info">{fechaCreacion}</p>
                                            </>
                                        }
                                        <label className="label-info">ID Proveedor </label>
                                        <p className="info">{proveedor}</p>

                                        <label className="label-info">Destino/s</label>
                                        {
                                            destino.length > 0 ?
                                                destino.map(elemento => (
                                                    <div>
                                                        <p className="info">{`Lugar: ${elemento.punto}`}</p>
                                                        <p className="info">{`Cantidad: ${elemento.cantidad}`}</p>
                                                        <hr />
                                                    </div>
                                                ))
                                                :

                                                <p className="info">No se le ha asignado un destino aún</p>
                                        }
                                    </div>
                                </div>



                            </div>
                        </div>
                    </>
            }

        </>
    )
}