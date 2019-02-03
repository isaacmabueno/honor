import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><Image src="assets/honor-agency-icon.png" className='logo' /></Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}
