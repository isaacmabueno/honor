import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid fluid={true}>
                <Row className='show-grid'>
                    <Col md={12}>
                        <h2 className='text-center'>Two to design for you!</h2>
                    </Col>
                    <Col xs={6} xsOffset={3}>
                        <p className='text-center'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq</p>
                    </Col>
                </Row>

                <Row className='client-listing'>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/rubens.jpg' />
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    </Col>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/DOOM.jpg' />
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    </Col>
                    
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/ptfa.jpg' />
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://www.presenttensefineales.com"></a>
                    </figure>
                    </Col>
                    
                    
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/trecutr.jpg' />
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://trecutr.com"></a>
                    </figure>                       
                    </Col>
                </Row>
            </Grid>
        )
    }
}