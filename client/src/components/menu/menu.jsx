import React from "react";
import "./menu.css";

const Menu = () =>
<div className="container menu">   
<div className="panel-body">
    <section className="row text-center">
        <div className="col-6 col-sm-4">
            <a href="/form-page"><img className="iconStyle" src="assets/imgs/menuItem1.png" alt="food image" height="200px"/></a>
            <div class="titleBtn">View our Jet Parts</div>
        </div>
        <div className="col-6 col-sm-4">
          <a href="/menu"><img class="iconStyle" src="assets/imgs/menuItem2.png" height="200px" alt="food image"/></a>
          <div class="titleBtn">View out Non-Jet Parts</div>
        </div>
        <div className="col-6 col-sm-4">
         <a href="/menu"><img className="iconStyle" src="assets/imgs/menuItem3.png" height="200px" alt="food image"/></a>
         <div class="titleBtn">Watch how we create our custom pieces</div>
        </div>
    </section>
</div>
</div>

export default Menu;