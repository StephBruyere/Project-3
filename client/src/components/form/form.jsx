import React from "react";
import "./form.css";

const Form = () =>
    <div class="container">
      <div class="page-header">
        <h1><a href="http://facebook.github.io/react/">React</a> Contact Form Example</h1>
        <p>An example of building a reusable contact form using <a href="http://facebook.github.io/react/docs/forms.html#uncontrolled-components">uncontrolled components</a>, extracted from a <a href="http://facebook.github.io/react/">React</a> app I'm working on.</p>
        <p>Plain old JavaScript functions are used to remove duplication of structure and logic from the form layout.</p>
        <p>The validation is barebones and whole-form-at-a-time for now, as I have plans for <a href="http://github.com/insin/newforms">newforms</a> in this area&hellip;</p>
      </div>
      <div id="contactform"></div>
    </div>
  
export default Form;
<script type="text/jsx" src="contactform.js"></script>