import "./single.scss";


//import Spinner from "../../layout/Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "../../../hooks/useForm";
import getProfile from "../../../redux/actions/VerProfile";
// import ProfileEdit from "./ProfileEdit";

const Profile = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { img, nombre, apellido, correo, createdAt, rol, usuario, description } = useSelector((state) => state.authReducer);
  // const {reload} = useSelector((state) => state.profile)

  const fechaCreacion = new Date(createdAt).toLocaleDateString()
  const rolMayus = rol.toUpperCase();

  // const [editar, setEditar] = useState(false);
  // const [descripcionText, setDescripcionText] = useState(description);


  // useEffect(()=>{
  //   setDescripcionText(description)
  // }, [reload])


  return (
    <>
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
                  <p className="info">{rolMayus}</p>
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
                  <label className="label-info">Usuario creado</label>
                  <p className="info">{fechaCreacion}</p>
                  <label className="label-info">Descripción</label>
                  <p className="info">{description}</p>

                  {/* <button onClick={()=> setEditar(true) }>Editar Descripcion</button>

                  {
                    editar &&
                    <ProfileEdit/>
                    
                  }
             */}

                </div>
              </div>

            </div>
          </main>

        </div>
      </>
    </>
  );
};

export default Profile;
