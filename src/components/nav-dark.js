import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'

const NavDark = (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Navbar.Brand href="#home" className="ms-3">Navbar with text</Navbar.Brand>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3">
          Foobar
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
