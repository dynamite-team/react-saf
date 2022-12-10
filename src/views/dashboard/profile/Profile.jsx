import "./single.scss";

//import Sidebar from "../../../components/navbars/Navhorizontal";

import axios from "axios";

//import Spinner from "../../layout/Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { useSelector } from "react-redux";


const Profile = () => {

  // const [publicacion, setPublicacion] = useState(null);

  const { id } = useParams();
  const { uid, img, nombre, apellido, correo, createdAt, rol } = useSelector((state) => state.authReducer);

  const fechaCreacion = new Date(createdAt).toLocaleDateString()
  const rolMayus = rol.toUpperCase();
  // const cargarPublicaciones = async () => {
  //   const resp = await axios.get(
  //     `http://localhost:5000/api/v1/usuarios/${id}`
  //   );

  //   if (resp.ok) {
  //     setPublicacion(resp.publicacion);
  //   }
  // };

  // useEffect(() => {
  //   cargarPublicaciones();
  // }, []);

  // console.log(publicacion);
  const descripcion = true;
  return (
    <>
      <>
        <div className="singleContainer">

          <header>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </header>

          <main >
            <div className="rowProfile">

              <div className="imagen-perfil">
                <Image cloudName="dawjd5cx8" publicId={img}>
                  <Transformation
                    height="200"
                    width="200"
                    radius="max"
                    aspectRatio="1.5"
                    crop="fill"
                  />
                </Image>
                <h4 className="name">{`${nombre} ${apellido}`}</h4>
              </div>
              <div className="contenedor-info">
                <h4 className="title-perfil">Informacion del perfil</h4>
                <div className="info-perfil">
                  <label>Rol de usuario</label>
                  <p className="info">{rolMayus}</p>
                  <label>Correo</label>
                  <p className="info">{correo}</p>
                  <label>Usuario creado</label>
                  <p className="info">{fechaCreacion}</p>
                  <label>Descripción</label>

                  {
                    descripcion ?   <div className="descripcion">
                    Hi ! My name is Jane Doe. I'm a UI/UX Designer from
                    Paris, in France. I really enjoy photography and
                    mountains.
                  </div>
                    : 

                    <input placeholder="descriocon"/>
                  }
                

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
