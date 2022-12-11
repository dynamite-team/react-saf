import React, { Component, useEffect, useState } from "react";
import "../../../styles/StyleForm.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import getProfile, { startUpdateProfile } from "../../../redux/actions/VerProfile";
import { useForm } from "../../../hooks/useForm";


export const ProfileEdit = () => {

  let dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id",id)
  const { profile } = useSelector((state) => state.profile);


  const [formEditValues, handleEditChange] = useForm({
    description: "",
  });

  let { description } = formEditValues;

  console.log("descripcion", formEditValues)

  let newDescription = profile;
  newDescription.description = description;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdateProfile(id, newDescription))
  }



  return (
    <>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="descripcion"
              name="description"
              value={description}
              onChange={handleEditChange}
            />
            <input type="submit" value="Agregar" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;