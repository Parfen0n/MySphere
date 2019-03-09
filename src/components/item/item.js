import React, { Component } from 'react';

import './item.css'

export default class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="inner">
                    <img className="logo-company" alt="Company Logo" src="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/507/7/logo/medium_d241551bfce977436052b7f8593b8462.png"/>
                    <span className="date">08 марта 2019</span>
                    <div className="info">
                        <div className="title">
                            <h2>Backend developer</h2>
                        </div>
                        <div className="specialization">
                            <span className="sphere">Backend -</span>
                            <span className="grade">Middle</span>
                        </div>
                        <div className="skills">
                            <p>PHP - JQuery - HTML - CSS - Wordpress</p>
                        </div>
                        <div className="addition">
                            <a className="name_company">Company: Email Soldiers</a>
                            <span className="city">City: Ryazan</span>
                            <span className="graphic">Graphic: Full day</span>
                        </div>
                        <div className="salary">
                            <span>From </span>
                            <span>35 000 rub.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}