import React, { Component } from 'react';

import Header from '../header';
import Filter from '../filter'
import RandomVacancy from '../random-vacancy';
import ItemList from '../item-list';
import Pagination from '../pagination';
import Footer from '../footer';

import './app.css';

export default class App extends Component {

    render() {

        return (
            <div className="my-sphere-app">
                <Header />
                <div className="content">
                    <RandomVacancy />
                    <Filter />
                    <ItemList />
                    <Pagination />
                    <Footer />
                </div>
            </div>
        )
    }
}