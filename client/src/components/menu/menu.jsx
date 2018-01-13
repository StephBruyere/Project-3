import React from "react";
import "./menu.css";
import { video } from "../../components/video";
import "../../App.js"
import {loadJets} from '../../App.js'
import {loadNonJets} from '../../App.js'
console.log("IN HEREREREREREER");
const Menu = () =>
<div className="container menu">   
<div className="panel-body">
    <section className="row text-center">
        <div className="col-6 col-sm-4">
            <a href="/jets"><img className="iconStyle" src="assets/imgs/menuItem1.png" alt="jet page" height="200px" 
            onClick={loadJets}/></a>
            <div className="titleBtn">View Jet landing gears</div>
        </div>
        <div className="col-6 col-sm-4">
          <a href="/non-jets"><img className="iconStyle" src="assets/imgs/menuItem2.png" height="200px" onClick={loadNonJets} alt="non-jet page"/></a>
          <div className="titleBtn">View Non-Jet landing gears</div>
        </div>
        <div className="col-6 col-sm-4">
        <button type="button" data-toggle="modal" data-target="#myModal1"><img className="iconStyle" id="myModal2" src="assets/imgs/menuItem3.png" height="200px" alt="youtube button"/></button>
         <div className="titleBtn">Watch how we test landing gear systems</div>
        </div>
    </section>
</div>
</div>

export default Menu;