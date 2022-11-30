import Card from 'react-bootstrap/Card';
import { Image, Transformation } from "cloudinary-react";

const CardProductoCat = (props) => {
  return (
    <Card style={{
      'maxWidth': '230px', 'maxHeight': '370px', 'margin': 'auto',
      'boxShadow': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', 'borderRadius': '10px',
      'borderColor': '#D4D4D4'
    }} key={props._id}>
      <Image cloudName="dawjd5cx8" publicId={props.img ? props.img : 'saf/not-found/sin-fotos_tl1rkz'}
        style={{ "margin": "3px 20px 3px 20px" }}>
        <Transformation
          height="700"
          width="700"
          aspectRatio="1"
          crop="fill"
        />
      </Image>
      <Card.Body style={{ "minHeight": "170px" }}>
        <Card.Title style={{ "fontSize": "17px", "fontFamily": "Cambria", "fontWeight": "bold", "minHeight": "40px" }}>
          {props.nombre}
        </Card.Title>
        <Card.Text style={{ "color": "#616161", "fontFamily": "Cambria", "fontSize": "17px", "minHeight": "50px" }}>
          {props.descripcion}
        </Card.Text>
        <Card.Text style={{ "color": "green", "minHeight": "40px" }}>
          ${props.precio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardProductoCat;