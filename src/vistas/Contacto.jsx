import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


const Contacto = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='contactos'>
            <Card className='cardContact' >
                <Card.Img variant="top" src="src/assets/img/git.jpg" />
                <Card.Body className='card_body'>
                    <Card.Title>Git Hub</Card.Title>
                    <a href="https://github.com/LindaLobo" className="btn btn-primary" target="_blank">CONECTAR</a>
                </Card.Body>
            </Card>

            <Card className='cardContact' >
                <Card.Img variant="top" src="src/assets/img/linkedin.png" />
                <Card.Body  className='card_body'>
                    <Card.Title>LinkedIn</Card.Title>
                    <a href="https://www.linkedin.com/in/linda-aguilar-lobo/" className="btn btn-primary" target="_blank">CONECTAR</a>
                </Card.Body>
            </Card>

            <Card className='cardContact' >
                <Card.Img variant="top" src="src/assets/img/email.jpg" />
                <Card.Body  className='card_body'>
                    <Card.Title>Email</Card.Title>
                    {/* <a href="mailto:lindalobo.aguilar@gmail.com" className="btn btn-primary mb-2" target="_blank">CONECTAR</a> */}
                    <Button variant="primary" onClick={handleShow}>
                        Ver Correo
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Correo Electronico</Modal.Title>
                </Modal.Header>
                <Modal.Body>lindalobo.aguilar@gmail.com</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Contacto
