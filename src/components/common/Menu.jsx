import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {Link, NavLink, useNavigate} from 'react-router-dom';


function Menu() {


  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand as={Link} to='/'> Blog de recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className={'nav-item nav-link'} to={'/'} >Inicio</NavLink>
            <NavLink end className={'nav-item nav-link'} to={'/administrador'}>Administrador</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
