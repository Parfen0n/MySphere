import React, { Component } from 'react';

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo">
                    <a href="#/main">My Sphere</a>
                </div>
                <nav>
                    <li>
                        <a href="#/main">Home</a>
                    </li>
                    <li>
                        <a href="#/main">Vacansies</a>
                    </li>
                    <li>
                        <a href="#/main">Specialists</a>
                    </li>
                    <li>
                        <a href="#/main">Companies</a>
                    </li>
                </nav>
                <div className="login">
                    <a href="#/signup">Sign in</a>
                    <button type="button" className="bg-green-button">
                        Sign up
                    </button>
                </div>
            </header>
        )
    }
}