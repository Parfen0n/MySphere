import React, { Component } from 'react';

import './jumbotron.css'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbo">
                <div className="jumbo-image"></div>
                <div className="jumbo-title"> MySphere </div>
                <div className="jumbo-text"> Find the best IT professionals </div>
            </div>
        )
    }
}