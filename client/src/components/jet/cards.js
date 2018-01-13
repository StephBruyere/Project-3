import React from "react";
import "./jet.css";

const Cards1 = props => (
  <div className="container-fluid image-container col-lg-4 col-md-4 col-sm-4">
    <img className="card" alt={props.name} src={props.image} />
    <ul>
    <li>{props.name}</li> 
    <li>{props.price}</li>
    <li className ="btn-cart"><span onClick={() => props.removeFriend(props.id)} className="remove"/><button type="button"> Cart</button> </li>
    </ul>
  </div>
);
export default Cards1;