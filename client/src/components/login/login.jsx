import React from "react";
import "./login.css";

const Login = () =>
<div className="container login">
<div className="nav">
<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar loginBtn"><button type="button" class="btn">Login</button></span>
</button> 
</div>

<div id="navbar2" class="navbar-collapse collapse">
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
      <li class="loginItems"><a href="#">REGISTER</a></li>
      <li class="loginItems"><a href="#"><img class= "cartIcon" src = "./assets/imgs/cart.png"/>CART</a></li>     
    </ul> 
    </div>
    </div>

export default Login;