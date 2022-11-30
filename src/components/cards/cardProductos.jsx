import Card from 'react-bootstrap/Card';

const CardProducto = (props) => {
    return (
        <Card style={{ 'width': '250px' }}>
          <Card.Img style={{'width': '150px', 'height': '150px', 'margin': 'auto'}} variant="top" src={props.img} />
          <Card.Body>
            <Card.Title style={{'font-family': 'Cambria'}}>{props.producto}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default CardProducto;