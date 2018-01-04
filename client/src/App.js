import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <Switch>
      <Home /> 
      </Switch>    
      <Footer />
      </div>
      </Router>
      
    );
  }
}

export default App;
