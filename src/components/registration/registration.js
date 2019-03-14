import React, { Component } from 'react';

import './registration.css'

export default class Registration extends Component {
    render() {
        return (
            <div className="desktop">
                <div className="title"> My Sphere </div>
                <div className="card">
                    <h3> Registration </h3>
                    <h4> Sign in using your account on other services </h4>
                    <div className="vk"></div>
                    <div className="facebook"></div>
                    <div className="google"></div>
                    <div className="twitter"></div>
                    <div className="github"></div>
                    <div className="line1"></div>
                    <div className="between"> Or </div>
                    <div className="line2"></div>
                </div>
                <div>
                    <input className="login-input" type="email" placeholder="Login (containing numbers, hypen)"></input>
                </div>
                <div>
                    <input className="email-input" type="email" placeholder="Email"></input>
                </div>
                <div>
                    <input className="password-input" type="password" placeholder="Password"></input>
                </div>
                <div>
                    <input className="password-repeat-input" type="password" placeholder="Repeat password"></input>
                </div>
                <div>
                    <input className="checkbox-input" type="checkbox" value="receive"/>
                    <div className="checkbox-text"> Receive service news every month </div>
                </div>
                <div className="reg-button"><button type="submit"> Sign up </button></div>
                <div className="user-a-text"> By registering you accept the terms of </div>
                <div className="user-a"><a href="#/user-agreement"> User agreement </a></div>
                <div className="login"><a href="#/signin"> Sign in </a></div>
                <div className="cr-logo"></div>
                <div className="footer1"> MySphere </div>
                <div className="footer2"> • Feedback </div>
            </div>
        )
    }
}