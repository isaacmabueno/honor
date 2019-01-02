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
                </Row>

                <Row className='client-listing'>
                    <Col md={6}>
                        <Image src='assets/rubens.jpg' />
                        <div className='overlay'></div>
                    </Col>
                    <Col md={6}>
                        <Image src='assets/ptfa.jpg' />
                        <div className='overlay'></div>
                    </Col>
                
                </Row>


           
                {/*<section className="rw-wrapper text-center">
                    <h2 className="rw-sentence">
                        <span>We specialize in </span>
                        <div className="rw-words rw-words-1">
                            <span>design</span>
                            <span>development</span>
                            <span>creativity</span>
                            <span>graphics</span>
                            <span>print</span>
                            <span>etc</span>

                        </div>
                        <br/>
                    </h2>
        </section>*/}
                {/*<Link to="/about">
                <Button bsStyle="primary">About</Button>
                </Link>*/} 
                
            </Grid>
        )
    }
}