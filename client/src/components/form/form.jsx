import React from "react";
import "./form.css";

const Form = props =>
  <div className="modal fade" id="myModal2" role="dialog">
    <div className="modal-dialog">   
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Contact Us.</h4>
        <div class="modalDesc"> Fill out the form below to inquire about our products or contact our team. <br/>Please allow up to 24 hours to receive a response.</div>
        </div>
        <div className="modal-body">
        <form className="form contactForm" id="formLogin3"> 
        <form action="https://formspree.io/sjones11486@yahoo.com"
        method="POST">
        <div class="regInput1">*Full Name</div>
        <input class="contactForm" type="text" name="name" placeholder="full name" required/>

        <div class="regInput1">Street Address</div>
        <input class="contactForm"  type="text" name="_address" placeholder="street address "/>

        <div class="regInput1">Apt or Suite</div>
        <input class="contactForm"  type="text" name="_address2" placeholder="apt or suite"/>

        <div class="regInput1">City</div>
        <input class="contactForm"  type="text" name="_city" placeholder="city"/> 

        <div class="regInput1">State</div>
        <input class="contactForm"  type="text" name="_state" placeholder="state"/> 

        <div class="regInput1">*Primary Phone Number</div>
        <input class="contactForm"  type="text" name="_phone" placeholder="primary phone" required/>

        <div class="regInput1">Cell Phone Number</div>
        <input class="contactForm"  type="tel" name="_cell" placeholder="cell phone"/>

        <div class="regInput1">*Email</div>
        <input class="contactForm"  type="email" name="_email" placeholder="email" required/>

        <div class="regInput1 ">*Comments</div>
        <input class="contactForm comments1"  type="text" name="_comments" required/>

        <input class="btnLogin" type="submit" value="Send"/> 
        </form>
        <div className="modal-footer">

        </div>
        </form>
        </div>

      </div>  
    </div>
  </div>

export default Form;
