import React, { Component } from 'react';
import Jumbo from './img/jumbo.jpg';

import './jumbotron.css'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbo">
                <div className="jumbo-image"><img src={Jumbo} alt="Jumbo"/></div>
                <div className="jumbo-title"> MySphere </div>
                <div className="jumbo-text"> Find the best IT professionals </div>>
            </div>
        )
    }
}