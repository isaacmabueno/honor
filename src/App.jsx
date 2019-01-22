import React, { Component } from 'react';
import './App.scss';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import FooterPage from './components/FooterPage';
import Clients from './components/Clients';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
