import "./single.scss";

//import Sidebar from "../../../components/navbars/Navhorizontal";

import axios from "axios";

//import Spinner from "../../layout/Spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { useSelector } from "react-redux";
const Profile = () => {
  const [publicacion, setPublicacion] = useState();

  const { id } = useParams();
  const { uid, img, nombre } = useSelector((state) => state.authReducer);

  
  useEffect(() => {
    const cargarPublicaciones = async () => {
      const resp = await axios.get(
        `https://node-saf-api.onrender.com/api/v1/usuarios/${id}`
      );

      if (resp.ok) {
        setPublicacion(resp.publicacion);
      }
    };
    cargarPublicaciones();
  }, [id]);

  console.log(publicacion);

  return (
    <>
      <>
        <div className="single ">
          {/* <Sidebar /> */}
          <div className="singleContainer">
            <div class="containersingle">
              <header>
                <i class="fa fa-bars" aria-hidden="true"></i>
              </header>
              <main>
                <div class="row">
                  <div class="left col-lg-4">
                    <div class="photo-left">
                    <Image cloudName="dawjd5cx8" publicId={img}>
            <Transformation
              height="200"
              width="200"
              radius="max"
              aspectRatio="1.5"
              crop="fill"
            />
          </Image>
                      {/* <img class="photo" src="src\assets\img\chem.jpg" /> */}
                    </div>
                    <h4 class="name">admin</h4>
                    <p class="info">administrador del SAF</p>
                    <p class="info">admin@gmail.com</p>
                    <div class="stats row"></div>
                  </div>
                  <div class="right col-lg-8">
                    <ul class="nav">
                      <li>About</li>
                    </ul>

                    <div class="row gallery">
                      <p class="desc">
                        Hi ! My name is Jane Doe. I'm a UI/UX Designer from
                        Paris, in France. I really enjoy photography and
                        mountains.
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Profile;
