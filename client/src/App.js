import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Admin from "./pages/admin";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
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
