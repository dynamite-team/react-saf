
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalUbi = ({ puntos, setValorSelect }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);

    };
    const handleShow = () => setShow(true);
    const obtenerValor = (e) => {
        console.log(e)
        setValorSelect(e.target.value)
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{ "fontFamily": "Cambria", "height": "50px", "borderRadius": "20px" }}>
                Elegir ubicación
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title style={{ "fontFamily": "Cambria" }}>Ubicación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <select onChange={obtenerValor}>
                        <option style={{ "fontFamily": "Cambria" }}>Seleccione un lugar</option>
                        {puntos.map((item) => (
                            <option value={item.uid} style={{ "fontFamily": "Cambria" }}>{item.nombre}</option>
                        ))}
                    </select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} style={{ "fontFamily": "Cambria" }}>Listo</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUbi;