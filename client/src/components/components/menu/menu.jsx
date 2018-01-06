import React from "react";
import "./menu.css";
import { video } from "../../components/video";

const Menu = () =>
<div className="container menu">   
<div className="panel-body">
    <section className="row text-center">
        <div className="col-6 col-sm-4">
            <a href="/form-page"><img className="iconStyle" src="assets/imgs/menuItem1.png" alt="jet page" height="200px"/></a>
            <div className="titleBtn">View our Jet Parts</div>
        </div>
        <div className="col-6 col-sm-4">
          <a href="/menu"><img className="iconStyle" src="assets/imgs/menuItem2.png" height="200px" alt="non-jet page"/></a>
          <div className="titleBtn">View out Non-Jet Parts</div>
        </div>
        <div className="col-6 col-sm-4">
        <button type="button" data-toggle="modal" data-target="#myModal1"><img className="iconStyle" id="myModal2" src="assets/imgs/menuItem3.png" height="200px" alt="youtube button"/></button>
         <div className="titleBtn">Watch how we create our custom pieces</div>
        </div>
    </section>
</div>
</div>

export default Menu;