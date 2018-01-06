import React from "react";
import "./register.css";

const Register = () =>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Register your account</h4>
        </div>
        <div className="modal-body">
        <form className="form" id="formLogin"> 
        <ul className="navbar-text registerContainer">
        <li><input className="register" id="Email" type="text" placeholder="email"/></li> 
        <li><input className="register" id="Username" type="text" placeholder="username"/></li> 
   <li><input className="register" id="Password" type="text" placeholder="password"/></li> 
        </ul>
        <button type="button" id="btnLogin" className="btn">Submit</button>
             </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>  
    </div>
  </div>

  export default Register;