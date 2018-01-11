import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Admin from "./pages/admin";
import Register from "./components/register";
import Video from "./components/video";
import Form from "./components/form";

class App extends Component {
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

      </Switch>    
      <Footer />
      </div>
      </Router>
      
    );
  }
}

export default App;
