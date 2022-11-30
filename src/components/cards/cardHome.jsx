export const CardHome = (props) => {
  return (
    <div className="card" style={{ borderRadius: "20px" }}>
      <img
        src={props.imagen}
        style={{ padding: "20px", borderRadius: "30px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body" style={{ marginTop: "-4%" }}>
        <h5
          className="card-title"
          style={{ textAlign: "justify", fontWeight: "bolder" }}
        >
          {props.titulo}
        </h5>
        <p className="card-text" style={{ textAlign: "justify", margin: "3%" }}>
          {props.texto}
        </p>
      </div>
    </div>
  );
};
