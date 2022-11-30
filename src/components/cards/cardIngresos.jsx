import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

const Ingreso = styled.p`
    font-size: 100%;
    color: green;
`;


const CardIngresos = ({mes, monto}) => {
    return (
        <>
            <Card style={{"boxShadow": "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"}}>
                <Card.Body>
                    <Card.Text>{mes}</Card.Text>
                    <Ingreso>{monto}</Ingreso>
                </Card.Body>
                
            </Card>
        </>
    )
}

export default CardIngresos;