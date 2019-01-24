import React, { Component } from 'react';
import './App.scss';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CustomNavbar from './components/CustomNavbar';
import FooterPage from './components/FooterPage';
import Client from './components/Clients';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Client client="Rubens Unisex Barbershop" projectDetails="Logo Identity & Web Design"/>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
