import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Vk from './img/vk-box.png';
import Facebook from './img/facebook-box.png';
import Google from './img/google-plus-box.png';
import Twitter from './img/twitter-box.png';
import Github from './img/github-box.png';

import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="desktop">
                <div className="title"> My Sphere </div>
                <div className="card">
                    <h3 className="h3-login"> Login </h3>
                    <h4> Sign in using your account on other services </h4>
                    <div className="vk"><img src={Vk} alt="Vk"/></div>
                    <div className="facebook"><img src={Facebook} alt="Facebook"/></div>
                    <div className="google"><img src={Google} alt="Google"/></div>
                    <div className="twitter"><img src={Twitter} alt="Twitter"/></div>
                    <div className="github"><img src={Github} alt="Github"/></div>
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
                <div className="reg"><Link to="/register"> Sign up </Link></div>
                <div className="cr-logo"></div>
                <div className="footer1"><Link to="/home"> My Sphere </Link></div>
                <div className="footer2"> • Feedback </div>
            </div>
        )
    }
}