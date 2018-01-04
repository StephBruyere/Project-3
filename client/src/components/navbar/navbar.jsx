import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Login from "../../components/login";

const Nav = () =>
<div className="container">
<Login />
  <nav className="navbar navbar-default">  
  <a href="/" className="navbar-brand"><img src ="./assets/imgs/navLogo.png"/>
  </a> 
    <div className="container">
      <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span classNames="icon-bar"></span>
      <span className="icon-bar"></span>
      </button> 
      </div>
      <div id="navbar1" className="navbar-collapse collapse">
      <form className="navbar-form navbar-right" action="/action_page.php">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search"/>
      </div>
      <button type="submit" className="btn btn-default btnspaces"> <img className= "btnIcon" src = "./assets/imgs/magnifier.png"/></button>
    </form>
      <ul className="nav navbar-nav navbar-right">
      <li className={window.location.pathname === "/jets" ? "active" : ""}>
      <Link to="/contact">JETS</Link></li>
      <li className= {window.location.pathname === "/non-jets" ? "active" : ""}>
      <Link to="/contact">NON-JETS</Link></li>
        <li className= {window.location.pathname === "/contact" ? "active" : ""}>
        <Link to="/contact">CONTACT</Link></li>
      </ul>
  </div>
  </div>
</nav>
</div>

export default Nav;