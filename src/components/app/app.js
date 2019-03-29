import React, { Component } from 'react';

import Login from '../components/login';
import Registration from '../components/registration';
import Vacancy from '../components/vacancy-page';
import Main from '../components/main';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    render() {

        return (
            <Router>
                
                <Route path="/" component={Main} />
                <Route path="/vacancy" component={Vacancy} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />

            </Router>
        );
    }

}