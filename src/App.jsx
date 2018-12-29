import React, { Component } from 'react';
import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import CustomNavbar from './components/CustomNavbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
          <Route path ='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
