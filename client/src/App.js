import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Jet from "./pages/jets";
import NonJet from "./pages/non-jet";
import Register from "./components/register";
import Video from "./components/video";
<<<<<<< HEAD
import API from "./utils/API";
=======
import Form from "./components/form";
>>>>>>> 46f71399063d7dc3ddfaeadc05e654c1808b3cba

class App extends Component {
  state = {};


 /*state = {
    contact: [], 
    firstName: "", 
    lastName: "", 
    address1: "", 
    address2: "",
    city: "", 
    state: "", 
    day: "", 
    evening: "", 
    email: "", 
    comments: ""
  };*/

  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <Form/>
      <Register/>
      <Video/>
      <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/contact" component={Contact} /> 
      <Route exact path="/admin" component={Admin} /> 
      <Route exact path="/jet" component={Jet} /> 
      <Route exact path="/non-jets" component={NonJet} /> 
      </Switch>    
      <Footer />
      </div>
      </Router>
      
    );
  };
};


export const loadJets = () => {
    API.getJets()
  };

  export const loadNonJets = () => {
    API.getNonJets()
  };

 export const loadPlane = id => {
    API.getPlane()
  };

  export const handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  export const handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.address1 && this.state.city
          && this.state.state && this.state.day && this.state.email && this.state.comments){
      console.log(this.state.firstName);
      API.saveContact({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        state: this.state.state,
        day: this.state.day,
        evening: this.state.evening,
        email: this.state.email,
        comments: this.state.comments
      })
        .catch(err => console.log(err));
    }
  };

export default App;
