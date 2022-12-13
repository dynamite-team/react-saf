import "./single.scss";


//import Spinner from "../../layout/Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "../../../hooks/useForm";
import getProfile from "../../../redux/actions/VerProfile";
import Spinner from "../../../layout/Spinner";
// import ProfileEdit from "./ProfileEdit";



export const ProfileUserList = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { profile } = useSelector((state) => state.profile);
    const { usuario, nombre, apellido, correo, description, createdAt, designado, img, rol } = profile;

    const [loading, setLoading] = useState(true);

    const fechaCreacion = new Date(createdAt).toLocaleDateString()
    // const rolMayus = rol.toUpperCase();

    useEffect(() => {
        dispatch(getProfile(id));
        setLoading(false);
    }, []);


    return (
        <>
            {
                loading ? <Spinner />
                    :
                    <>
                        <div className="singleContainer">

                            <header>
                                <i aria-hidden="true"></i>
                            </header>

                            <main >
                                <div className="rowProfile">

                                    <div className="imagen-perfil">
                                        <Image cloudName="dawjd5cx8" publicId={img ? img : "saf/not-found/sin-fotos_tl1rkz"}>
                                            <Transformation
                                                height="200"
                                                width="200"
                                                radius="max"
                                                aspectRatio="1.5"
                                                crop="fill"
                                            />
                                        </Image>
                                        <div className="info-debajo-imagen">
                                            <h4 className="name">{usuario}</h4>
                                            <p className="info">{rol}</p>
                                        </div>
                                    </div>

                                    <div className="contenedor-info">
                                        <h4 className="title-perfil">Informacion del perfil</h4>
                                        <hr style={{ "borderWidth": "2px", "backgroundColor": "#4267b2" }} />
                                        <div className="info-perfil">
                                            <label className="label-info">Nombres y apellidos</label>
                                            <p className="info">{`${nombre} ${apellido}`}</p>
                                            <label className="label-info">Correo</label>
                                            <p className="info">{correo}</p>
                                            {

                                                designado &&
                                                <>
                                                    <label className="label-info">Lugar designado</label>
                                                    <p className="info">{designado.nombre}</p>
                                                </>

                                            }

                                            {
                                                description == "" ?
                                                    <>
                                                        <label className="label-info">Descripción</label>
                                                        <p className="info">Trabajador del SAF</p>
                                                    </>
                                                    :
                                                    <>
                                                        <label className="label-info">Descripción</label>
                                                        <p className="info">{description}</p>
                                                    </>
                                            }

                                            {
                                                createdAt &&
                                                <>
                                                    <label className="label-info">Creado el dia</label>
                                                    <p className="info">{fechaCreacion}</p>
                                                </>
                                            }

                                        </div>
                                    </div>

                                </div>
                            </main>

                        </div>
                    </>
            }
        </>
    );
}