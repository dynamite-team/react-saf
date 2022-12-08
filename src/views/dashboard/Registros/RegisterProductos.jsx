import React, { useEffect, useRef, useState } from "react";
import "../../../styles/StyleForm.css";
import { useForm } from "../../../hooks/useForm";
import { connect } from "react-redux";

//import Sidebar from "../../../components/navbars/Navhorizontal";

import { getCategorias } from "../../../redux/actions/verCategorias";

import { fetchRegistroProducto } from "../../../redux/actions/productos";

import Spinner from "../../../layout/Spinner";
import logoPost from "../../../assets/img/fondo2.jpg";

import { postImage } from "../../../helpers/subirIMG";

import { verUsuarios } from "../../../redux/actions/verUsuarios";

const RegisterProductor = ({
  fetchRegistroProducto,
  getCategorias,
  categoria: {
    categorias: { categorias },
    loading,
  },
  verUsuarios,
  usuario: {
    usuarios: { usuarios },
  },
}) => {
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    nombre: "",
    precio: "",
    categoria: "",
    descripcion: "",
    proveedor: "",
   
  });

  const inputFileRef = useRef();

  const [image, setImage] = useState(logoPost);

  const { nombre, precio,usuario, categoria, descripcion, proveedor } =
    formRegisterValues;

  const handleRegister = async (e) => {
    e.preventDefault();

    const imagen = inputFileRef.current.files[0];

    const formData = new FormData();
    formData.append("imagen", imagen);

    //setRefresh(true)
    console.log(nombre);

    const subirImagen = async (value) => {
      const { public_id, msg, ok } = await postImage("api/v1/uploads", value);

      if (ok) {
        return public_id;
      } else {
        return msg;
      }
    };

    const public_id = await subirImagen(formData);

    const img = public_id;

    console.log(img);
    console.log(imagen);
    console.log(formData);
    console.log(subirImagen);

    fetchRegistroProducto(
      nombre,
      precio,
    
      categoria,
      descripcion,
      proveedor,
      img
    );

    console.log({ img: public_id });
  };

  const processImage = (e) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);

    setImage(imageUrl);
  };

  useEffect(() => {
    getCategorias();
    verUsuarios();
  }, []);


  console.log(categorias);
  return (
    <>
      {!loading ? (
        <>
          <div className="home">
            {/*  <Sidebar /> */}
            <div className="homeContainer">
              <div class="wrapper2 ">
                <div id="formContent">
                  <h2 class="active"> Registrar Productos </h2>

                  <form onSubmit={handleRegister}>
                    <img
                      src={image}
                      className="my-2"
                      style={{ borderRadius: 20 }}
                      alt=""
                      width="160"
                      height="160"
                    />

                    <div className="mb-3 mt-3">
                      <input
                        className="form-control"
                        type="file"
                        accept="image/*"
                        id="imagen"
                        ref={inputFileRef}
                        onChange={processImage}
                      />
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleRegisterInputChange}
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                      name="precio"
                      value={precio}
                      onChange={handleRegisterInputChange}
                    />

                    <select
                      class="form-select form-select mx-4 mb-5"
                      aria-label="Default select example"
                      style={{
                        width: "400px",
                        top: "10px",
                        position: "relative",
                      }}
                      name="categoria"
                      onChange={handleRegisterInputChange}
                    >
                      <option>Selecciona una categoria</option>
                      {categorias.map((categoria) => (
                        <option key={categoria.uid} value={categoria.uid}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descripcion"
                      name="descripcion"
                      value={descripcion}
                      onChange={handleRegisterInputChange}
                    />

                    <select
                      class="form-select form-select mx-4 mb-5"
                      aria-label="Default select example"
                      style={{
                        width: "400px",
                        top: "10px",
                        position: "relative",
                      }}
                      name="proveedor"
                      onChange={handleRegisterInputChange}
                    >
                      <option>Selecciona un proveedor</option>
                      {usuarios.map((usuario) => (
                        <option key={usuario.uid} value={usuario.uid}>
                          {usuario.nombre}
                        </option>
                      ))}
                    </select>

                    <input type="submit" class="fadeIn fourth" value="Enviar" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  categoria: state.categoria,
  data: state.data,
  usuario: state.usuario,
});

export default connect(mapStateToProps, {
  fetchRegistroProducto,
  getCategorias,
  verUsuarios,
})(RegisterProductor);
