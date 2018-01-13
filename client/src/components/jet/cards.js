import React from "react";
import "./jet.css";

class SinglePage extends React.Component {
  handleClick = () => {
  }

  render() {
    return (
      <button onClick={this.handleClick} type="button" className="btn-cart" data-toggle="modal" data-target="#myModal6">View</button>

    );
  }
}

const Cards1 = props => (
  <div className="container-fluid image-container col-lg-4 col-md-4 col-sm-6">
    <img className="card" alt={props.name} src={props.image} />
    <ul>
    <li> {props.name}</li> 
    <li>{props.price}</li>
    <SinglePage/>
    </ul>
    <div className="modal fade" id="myModal6" role="dialog">
    <div className="modal-dialog">   
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">{props.name}</h4>
        </div>
        <div className="priceStyle">PRICE: {props.price}</div>
        <div className="modal-body">
        <ul className="navbar-text registerContainer">
        <img className="card" alt={props.name} src={props.image} />
        </ul>
        <div className="modal-footer">
        <button type="button" id="btnLogin" className="btn">CART</button>
        <button type="button" id="btnClose" className="btn btn-default" data-dismiss="modal">Back</button>
        </div>
        </div>
      </div>  
    </div>
  </div>
  </div> 
);

export default Cards1;