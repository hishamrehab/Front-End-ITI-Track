import React from 'react'
import { Navbar } from 'react-bootstrap'
import {  Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ITI Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="/" className="mx-3">Home</Link>
           <Link to="/about"className="mx-3">About us</Link>
           <Link to="/contact">Contact us</Link>
           <Link to="/contact"className="mx-3">Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header