import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Clients extends React.Component {
    
    state = {
        clients: [ 
            { name: 'Rubens Unisex Barbershop', projectDetails: 'Logo Identity & Web Design' },
            { name: 'Impending Doom', projectDetails: 'Entertainment Branding and Web Design' },
            { name: 'Present Tense Fine Ales', projectDetails: 'Branding Identity & Web Design' },
            { name: 'Aesthetic Tree & Alternative Recycling', projectDetails: 'Logo Identity & Web Design' },
            { name: 'Indoor Sciences', projectDetails: 'Web Design' }
        ] 
    }

    render() {
        return (
        <Grid fluid={true}>
            <Row className='client-listing'>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='assets/rubens.jpg' alt='Rubens Unisex' />
                        <span>{this.state.clients[0].name}</span>
                        <span className='reveal'>{this.state.clients[0].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='assets/DOOM.jpg' alt="Impending Doom Music" />
                        <span>{this.state.clients[1].name}</span>
                        <span className='reveal'>{this.state.clients[1].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='assets/ptfa.jpg' alt="Present Tense Fine Ales" />
                        <span>{this.state.clients[2].name}</span>
                        <span className='reveal'>{this.state.clients[2].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://www.presenttensefineales.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='assets/trecutr.jpg' alt='Aesthetic Denver' />
                        <span>{this.state.clients[3].name}</span>
                        <span className='reveal'>{this.state.clients[3].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://trecutr.com"></a>
                    </figure>
                </Col>
            </Row>
        </Grid>
    
        );
    }
}
    export default Clients;