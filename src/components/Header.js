import React, { useState } from 'react';
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const Header = () => {
   const handleClick = () => {
    console.log("button");
   }

  return (
    <div className='header'>
      <Navbar>
        <NavbarBrand href="/">
          <img src="../TBH.png" alt="logo" className="logo" />
        </NavbarBrand>
        <span className="tbh">TBH Apartments</span>
      </Navbar>
      <div className='s-button' onClick={handleClick}>
        <Link to="/Signup">
          <Button color="success">Sign Up</Button>
        </Link>
        </div>
        <div className='s-button' onClick={handleClick}>
        <Link to="/Login">
          <Button color="danger">Login</Button>
        </Link>
      </div>
    </div>
  );
};
export default Header
