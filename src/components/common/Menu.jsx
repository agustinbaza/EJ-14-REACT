import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';


function Menu() {


  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home"> Blog de recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" >Inicio</Nav.Link>
            <Nav.Link href="#">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
