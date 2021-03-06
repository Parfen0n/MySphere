import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.css'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    
    onLogout = () => {
        this.setState({
          isLoggedIn: false
        })
    }

    render() {
        return (
            <header className="header">
                <div className="logo">
                    <Link to="/"> My Sphere </Link>
                </div>
                <nav>
                    <li className="home">
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/vacancy"> Vacansies </Link>
                    </li>
                    <li>
                        <Link to="/"> Specialists </Link>
                    </li>
                    <li>
                        <Link to="/"> Companies </Link>
                    </li>
                </nav>
                <div className="loginn">
                    <Link to="/login"> Sign in </Link>
                    <button type="button" className="bg-green-button">
                        <Link to="/register"> Sign up </Link>
                    </button>
                </div>
            </header>
        )
    }
}