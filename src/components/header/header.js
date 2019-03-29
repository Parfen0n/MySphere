import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <Link to="/home">My Sphere</Link>
                </div>
                <nav>
                    <li className="home">
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/vacancy">Vacansies</Link>
                    </li>
                    <li>
                        <a href="#/main">Specialists</a>
                    </li>
                    <li>
                        <a href="#/main">Companies</a>
                    </li>
                </nav>
                <div className="loginn">
                    <Link to="/login">Sign in</Link>
                    <button type="button" className="bg-green-button">
                        <Link to="/register">Sign up</Link>
                    </button>
                </div>
            </header>
        )
    }
}