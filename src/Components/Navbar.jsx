import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import main from '../assets/main_logo.png'

const Navigation = () => {
  return (
    <>
      <Navbar bg="white" expand="sm" >
        <Navbar.Brand href="/">
          <img
            src={main}
            className='AKM-Logo'
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse className="collapse navbar-collapse justify-content-end">
          <Nav >
            <Nav.Link href="/about">OUR STORY</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            <Nav.Link href="/contact">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >

    </>

  );
}



export default Navigation;