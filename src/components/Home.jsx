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
                    <Col xs={4} xsOffset={4}>
                        <p className='text-center'>A husband and wife design and development shop. </p>
                        <p>We create interactive experiences through beautiful and continual design</p>
                    </Col>
                </Row>

                <Row className='client-listing'>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/rubens.jpg' alt='Rubens Unisex' />
                        <span>Rubens Unisex Barbershop</span>
                        <span className='reveal'>Logo Identity & Web Design</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    </Col>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/DOOM.jpg' alt="Impending Doom Music" />
                        <span>Impending Doom Music</span>
                        <span className='reveal'>Entertainment Branding & Web Design</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                    </Col>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/ptfa.jpg' alt="Present Tense Fine Ales" />
                        <span>Present Tense Fine Ales</span>
                        <span className='reveal'>Branding Identity & Web Design</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://www.presenttensefineales.com"></a>
                    </figure>
                    </Col>
                    <Col md={6}>
                    <figure class="overlay">
                        <Image src='assets/trecutr.jpg' alt='Aesthetic Denver' />
                        <span>Aesthetic Tree & Alternative Recycling</span>
                        <span className='reveal'>Logo Identity & Web Design</span>
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