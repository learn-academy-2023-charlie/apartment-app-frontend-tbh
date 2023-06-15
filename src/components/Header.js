import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () =>
{
  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <img src="../TBH.png" alt="logo" className="logo" />
        </NavbarBrand>
        <span className="tbh">TBH Apartments</span>
      </Navbar>
    </div>
  );
};

export default Header
