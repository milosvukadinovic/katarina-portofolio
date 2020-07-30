import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../css/navbarcss.css'

 const NavigationBar = ()=>{
    return(
        <div>
      <Navbar variant="light" >
        <span id="mainBar" href="#home" class="ml-5 mt-4 mb-4">Katarina Marković  -  Designer</span>
        
        
      </Navbar>
      <Navbar bg="light">
  {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"> */}
    <Nav className="ml-auto mr-4">
      <Nav.Link href="#home">About</Nav.Link>
      <Nav.Link href="#link">Gallery</Nav.Link>
      <Nav.Link href="#link">Blog</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
     
    </Nav>
  {/* </Navbar.Collapse> */}
</Navbar>
    </div>
    )
}

export default NavigationBar;