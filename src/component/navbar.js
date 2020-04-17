import React, { useState } from 'react';
import {
    Collapse,
    NavbarToggler,
} from 'reactstrap';
import logo from '../assets/logo.png'

const Bar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#F7D2C1"}}>
        <a className="navbar-brand pl-5 ml-5" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="" />
            Letter
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
    <ul className="navbar-nav" style={{ justifyContent: "flex-end", width: "100%" }}>
      <li className="nav-item pr-5 pl-4">
        <a className="nav-link" href="/">Plugins</a>
      </li>
      <li className="nav-item pr-5 pl-4">
        <a className="nav-link" href="/">Pricing</a>
      </li>
      <li className="nav-item pr-5 pl-4">
        <a className="nav-link" href="/">Sign in</a>
      </li>
      <li className="nav-item pr-5 pl-4">
      <a className="nav-link active" href="/">Free trial</a>
      </li>
    </ul>
  </Collapse>
</nav>
    </div>
  );
}

export default Bar;