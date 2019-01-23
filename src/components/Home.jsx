import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
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
            </Grid>
        )
    }
}
