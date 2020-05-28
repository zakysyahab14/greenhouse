import React, { useState } from 'react';
import {
    Collapse,
    NavbarToggler
} from 'reactstrap';
import Popup from "reactjs-popup";

import logo from '../assets/close-cross.png'

const Bar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const handle = () => alert('success')

  return (
    <div id="Nav" style={{marginBottom: "150px"}}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor: 'white'}}>
        <a className="navbar-brand" href="#Nav">
            <img className="d-inline-block align-top triangle-topleft mr-3" alt="" />
            <img src={logo} width="70" height="50" alt="" className="pl-3 mt-3 mr-3"/><span className="textHome mt-3">HOME</span>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
      <ul className="navbar-nav" style={{ justifyContent: "flex-end", width: "100%" }}>
      <li className="AboutLink nav-item pl-4">
        <a className="AboutLink nav-link" href='#About'>ABOUT</a>
      </li>
      <li className="AboutLink nav-item pl-4">
        <a className="nav-link" href="#Pricing">PRICING</a>
      </li>
      <li className="AboutLink nav-item pl-4">
        <a className="nav-link" href="#Contact">CONTACT</a>
      </li>
      <li className="LoginBut nav-item pr-5 pl-4 pt-2" >
      <div class="dropdown">
      <Popup trigger={<button class="btn btn-outline-primary" style={{width:'150px'}}> LOGIN</button>} position="bottom right" width="400px">
    <div width="400px">
    <form class="px-2 py-2" width="400px">
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@gmail.com" required/>
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" required/>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck" />
                <label class="form-check-label" for="dropdownCheck">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary" style={{width: '100%'}} onSubmit={handle} href="#Nav">Sign in</button>
            </form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/">Sign up</a>
            <a class="dropdown-item" href="/">Forgot password?</a>
    </div>
  </Popup>
</div>
      </li>
      </ul>
      </Collapse>
      </nav>
    </div>
  );
}

export default Bar;