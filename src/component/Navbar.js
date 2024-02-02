import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavbarComponent = () => {
    return (
        <Navbar className="navbar" bg="dark" data-bs-theme="dark" >
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="mx-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
          </Nav>
      </Navbar>
    )
}

export default NavbarComponent