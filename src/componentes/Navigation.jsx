import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Navigation = () => {


  return (
    <div>
      {/* <Nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Linda Aguilar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="curriculum.html">Curriculum</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="proyectos.html">Proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="contactos.html">Contactos</a>
              </li>
            </ul>
          </div>
        </div>
        </Nav> */}

        <Navbar>
        <Container className='container_nav'>
          <Navbar.Brand href="/">Linda Aguilar</Navbar.Brand>
          <Nav className="container_info ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/curriculum">Curriculum</Nav.Link>
            <Nav.Link href="/proyectos">Proyectos</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    
    </div>
  )
}

export default Navigation
