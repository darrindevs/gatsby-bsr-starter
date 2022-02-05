import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'

const NavLight = (
    <Navbar bg="light" expand="lg" className="navbar-light">
      <Navbar.Brand href="#home" className="ms-3">Navbar with text</Navbar.Brand>
      <Navbar.Toggle className="me-3"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="ms-3">
          Foobar
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavLight
