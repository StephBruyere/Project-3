import React from "react";
import "./register.css";

const Register = () =>
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Register your account</h4>
          <div class="modalDesc"> Use the form below to register your account.</div>
        </div>
        <div className="modal-body">
        <form className="form" id="formLogin"> 
        <ul className="navbar-text registerContainer">
        <li class="regInput">Email<input className="register" id="Email" type="text" placeholder="email"/></li> 
        <li class="regInput">Username<input className="register" id="Username" type="text" placeholder="username"/></li> 
   <li class="regInput">Password<input className="register" id="Password" type="text" placeholder="password"/></li> 
        </ul>
        <div className="modal-footer">
        <button type="button" id="btnLogin" className="btn">Submit</button>
        <button type="button" id="btnClose" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        </form>
        </div>

      </div>  
    </div>
  </div>

  export default Register;