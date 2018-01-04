import React from "react";
import "./login.css";

var Register = React.createClass({
  render: function () {
      return <div>
<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
Launch demo modal
</button>

<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
      <h4 className="modal-title" id="myModalLabel">Modal title</h4>
    </div>
    <div className="modal-body">
    <form className="form" id="formLogin"> 
    <input className="name" id="name" type="text" placeholder="Full Name"/> 
    <input className="username" id="username" type="text" placeholder="Username"/> 
    <input className="password" id="password" type="password" placeholder="Password"/><br/>
    <button type="button" id="btnLogin" className="btn">Register</button>
    </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
      </div>
  }
});


React.render(<Register/>, document.body);

export default Register;