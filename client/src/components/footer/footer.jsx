import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () =>
<footer className="footer">
    <div className="container">
        <span className="text-muted">RC CRAFTER</span><br/>
        <ul className="list-inline footerStyle">
        <li className={window.location.pathname === "/" ? "active" : ""}>
        <Link to="/contact">Home</Link></li>
        <li className= {window.location.pathname === "/products" ? "active" : ""}>
        <Link to="/contact">&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;|&nbsp;&nbsp;&nbsp; &nbsp;Products &nbsp;&nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp;&nbsp;</Link></li>     
          <li className= {window.location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact us</Link></li>
        </ul>
        <ul>
        <li className="address">4646 Ashbury Park, North Olmsted, Ohio 44070</li> 
        <li className="address">P. 440-777-4683 &nbsp; | &nbsp; C. 440-263-9807 &nbsp; | &nbsp; E. Rccrafters@aol.com</li>   
        </ul>  
        </div>
</footer>

export default Footer;