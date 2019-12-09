import React from 'react'
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar className="justify-content-sm-center" bg="dark" variant="dark" fixed="bottom"> 
        <Navbar.Brand>Secretaria Municipal de Educação - SME</Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Footer;
