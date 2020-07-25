import React from 'react'
import { BrowserRouter as Router ,Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";

import './NavbarWeb.css'

const NavbarWeb = () => (
  
  <div className="navbarweb-wrapper">
   <Navbar bg="primary" variant="dark">
     <Navbar.Brand className="font-weight-bold">Game of life</Navbar.Brand>
     <Nav className="mr-auto">
       <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
       <Nav.Link href="#layout"><Link to="/layout">Play</Link></Nav.Link>
     </Nav>
   </Navbar>
  </div>
)

export default NavbarWeb;