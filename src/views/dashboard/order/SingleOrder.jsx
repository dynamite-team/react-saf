import React from "react";
import "./singleOrder.scss";

const SingleOrder = () => {
  return (
    <div className="stock">
      <div className="stock-container">
        <div className="stock-top">
          <div className="stock-top-text">Agregar al inventario:</div>
        </div>
        <div className="stock-bottom">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="bottom-button">
          <button type="submit">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
