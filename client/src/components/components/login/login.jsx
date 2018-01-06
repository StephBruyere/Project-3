import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { register } from "../../components/register";

const Login = () =>
<div className="container login">
<div className="nav">
<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
<span className="sr-only">Toggle navigation</span>
<span className="icon-bar loginBtn"><button type="button" className="btn">Login</button></span>
</button> 
</div>

<div id="navbar2" className="navbar-collapse collapse">
<ul className="nav navbar-nav navbar-right">
    <li className="dropdown" id="menuLogin">
    <a className="dropdown-toggle" href="#" data-toggle="dropdown" id="navLogin">LOGIN</a>
    <div className="dropdown-menu">      
    <form className="form" id="formLogin">  
    <input className="username" id="username" type="text" placeholder="Username"/> 
    <input className="password" id="password" type="password" placeholder="Password"/><br/>
    <button type="button" id="btnLogin" className="btn">Login</button>
         </form>
       </div>
      </li>
    {/* Trigger the modal with a button */}
      <button type="button" className="formLogin" data-toggle="modal" data-target="#myModal">REGISTER</button>
      <li className="loginItems"><a href="#"><img className= "cartIcon" src = "./assets/imgs/cart.png"/>CART</a></li>     
    </ul> 
    </div>
    </div>

export default Login;