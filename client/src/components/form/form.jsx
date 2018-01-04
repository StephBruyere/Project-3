import React from "react";
import "./form.css";

const Form = props =>
<form className="search">
    <div className="form-group newContainer">
    <div className="header2">Contact Us:</div>
      <label htmlFor="contact"></label>
      <div className ="title2"> First Name</div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="firstName"
        type="text"
        className="form-control labels"
        placeholder="first name"
        id=""
      />
      <div className ="title2"> Last Name</div>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="lastName"
        type="text"
        className="form-control labels"
        placeholder="last name"
        id=""
      />
      <div className ="title2"> Address 1</div>
      <input
      value={props.search}
      onChange={props.handleInputChange}
      name="address1"
      type="text"
      className="form-control labels"
      placeholder="street address"
      id=""
    />
    <div className ="title2">Address 2</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="address2"
    type="text"
    className="form-control labels"
    placeholder="apartment or suite number"
    id=""
  />
  <div className ="title2">City</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="city"
    type="text"
    className="form-control labels"
    placeholder="city"
    id=""
  />
  <div className ="title2"> State</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="state"
    type="text"
    className="form-control labels"
    placeholder="state"
    id=""
    />
    <div className ="title2"> Daytime Phone Number</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="day"
    type="text"
    className="form-control labels"
    placeholder="daytime phone number"
    id=""
    />
    <div className ="title2"> Evening Phone Number</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="evening"
    type="text"
    className="form-control labels"
    placeholder="evening phone number"
    id=""
    />
    <div className ="title2">Email</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="email"
    type="text"
    className="form-control labels"
    placeholder="email"
    id=""
    />
    <div className ="title2"> Comments</div>
    <input
    value={props.search}
    onChange={props.handleInputChange}
    name="comments"
    type="text"
    className="form-control labels"
    placeholder=""
    id="comments"
    />  
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn submitBtn float-right" align="right">Submit
      </button>
    </div>
  </form>

export default Form;
