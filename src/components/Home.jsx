import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Column, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1>Honor Agency</h1>
                </Jumbotron>
                <Link to="/about">
                <Button bsStyle="primary">About</Button>
                </Link>
            </Grid>
        )
    }
}