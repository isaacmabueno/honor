import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';

class Clients extends React.Component {
    
    state = {
        clients: [ 
            { name: 'Redden Properties', projectDetails: 'Branding Identity & Web Design and Development' },
            { name: 'Desk 606', projectDetails: 'Logo Identity & Web Design and Development' },
            { name: 'Indoor Sciences', projectDetails: 'Web Design and Development' },
            { name: 'Chitown Property Services', projectDetails: 'Branding Identity & Web Design and Development' },
            { name: 'Rubens Unisex Barbershop', projectDetails: 'Logo Identity & Web Design and Development' },
            { name: 'Impending Doom', projectDetails: 'Entertainment Branding and Web Design and Development' },
            { name: 'Present Tense Fine Ales', projectDetails: 'Branding Identity & Web Design and Development' },
            { name: 'Aesthetic Tree & Alternative Recycling', projectDetails: 'Logo Identity & Web Design' }
        ] 
    }

    render() {
        return (
        <Grid fluid={true}>
            <Row className='client-listing'>
            <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/redden-properties.jpg' alt='Redden Properties' />
                        <span>{this.state.clients[0].name}</span>
                        <span className='reveal'>{this.state.clients[0].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="https://reddenproperties.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/desk-606.jpg' alt='Desk 606' />
                        <span>{this.state.clients[1].name}</span>
                        <span className='reveal'>{this.state.clients[1].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="https://desk606.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/indoor-sciences.jpg' alt='Indoor Sciences' />
                        <span>{this.state.clients[2].name}</span>
                        <span className='reveal'>{this.state.clients[2].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="https://indoorsciences.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/chitown-property-services.jpg' alt="Chitown Property Services" />
                        <span>{this.state.clients[3].name}</span>
                        <span className='reveal'>{this.state.clients[3].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="https://cps606.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/rubens.jpg' alt='Rubens Unisex' />
                        <span>{this.state.clients[4].name}</span>
                        <span className='reveal'>{this.state.clients[4].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/DOOM.jpg' alt="Impending Doom Music" />
                        <span>{this.state.clients[5].name}</span>
                        <span className='reveal'>{this.state.clients[5].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/ptfa.jpg' alt="Present Tense Fine Ales" />
                        <span>{this.state.clients[6].name}</span>
                        <span className='reveal'>{this.state.clients[6].projectDetails}</span>
                        <figcaption>
                            <h3>View Project</h3>
                        </figcaption>
                        <a target='_blank' href="http://www.presenttensefineales.com"></a>
                    </figure>
                </Col>
                <Col md={6}>
                    <figure className="overlay">
                        <Image src='./assets/trecutr.jpg' alt='Aesthetic Denver' />
                        <span>{this.state.clients[7].name}</span>
                        <span className='reveal'>{this.state.clients[7].projectDetails}</span>
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