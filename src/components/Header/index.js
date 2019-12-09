import React from 'react'
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar className="justify-content-sm-center" bg="primary" variant="dark"> 
        <Navbar.Brand>Teste de ReactJS - AMcomE</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header;
