import React, { Component } from 'react';
import { Footer, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FooterPage.css';

class FooterPage extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
          <div className="col-md-6">
            <Image src="assets/honor-agency-icon-stacked.png" className='logo-footer' />
          </div>
          <div className="col-md-6">
            <ul>      
              <li>&copy; Honor Agency 2018</li>
              <li><Link to="contactus">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default FooterPage;