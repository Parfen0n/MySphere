import React, { Component } from 'react';

import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="desktop">
                <div className="title"> My Sphere </div>
                <div className="card">
                    <h3> Login </h3>
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
                    <input className="email-input" type="email" placeholder="Email"></input>
                </div>
                <div>
                    <input className="password-input" type="password" placeholder="Password"></input>
                </div>
                <div className="log-button"><button type="submit"> Sign in </button></div>
                <div className="rem"><a href="#/remind"> Remind password </a></div>
                <div className="reg"><a href="#/signup"> Sign up </a></div>
                <div className="cr-logo"></div>
                <div className="footer1"> MySphere </div>
                <div className="footer2"> • Feedback </div>
            </div>
        )
    }
}