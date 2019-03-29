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

                <Route path="/home" component={Main} />
                <Route path="/vacancy" component={Vacancy} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />

            </Router>
        );
    }
}