import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/contact" component={Contact} /> 
      </Switch>    
      <Footer />
      </div>
      </Router>
      
    );
  }
}

export default App;
