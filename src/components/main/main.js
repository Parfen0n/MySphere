import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';
import Jumbotron from '../jumbotron';
import Graph from './img/graph.png';
import Payment from '../payment';
import Price from '../price-list';


import './main.css'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Jumbotron />
                <div>
                    <div className="dist-image"><img src={Graph} alt="Graph" className="distribution"/></div>
                    <Payment />
                    <Price />
                    <Footer />
                </div>
            </div>
        )
    }
}