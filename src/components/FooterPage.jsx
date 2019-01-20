import React, { Component } from 'react';
import { Footer, Nav, NavItem, Image } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './FooterPage.scss';

class FooterPage extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid text-center">
          <div className="row">
          <div className="col-md-4">
            <Image src="assets/honor-agency-icon-stacked.png" className='logo-footer' />
          </div>
          <div className="col-md-4">
            <ul>
              <li>Chicago, IL</li>
              <li>Email: <a href="mailto:hello@honoragency.com">hello@honoragency.com</a></li>
            </ul>
            
          </div>
          <div className="col-md-4">
            <ul className="center">      
              <li>&copy; Honor Agency 2019</li>
              <li className='small'>Made with <i className="fa fa-heart"></i> in Chicago</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
  }
}

export default FooterPage;