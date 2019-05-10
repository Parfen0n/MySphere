import React, { Component } from 'react';

import Main from '../main';
import Vacancy from '../vacancy-page';
import Login from '../login';
import Registration from '../registration';


import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                
                <Route path="/" exact component={Main} />
                <Route path="/vacancy" exact component={Vacancy} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Registration} />

            </Router>
        );
    }
}