import React, {useState} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';


const Header = () => {

  
  return (
    <div>
      <Navbar> 
          <NavbarBrand href = "/">
            <img src="../TBH.png" alt="logo" class="logo" />
          </NavbarBrand>
        <span class="tbh">TBH Apartments</span>
      </Navbar>
    </div>
  );
}


export default Header