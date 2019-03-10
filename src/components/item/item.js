import React, { Component } from 'react';

import './item.css'

export default class Item extends Component {
    render() {

        const { title, special, grade, skills, company, city, graphic, salary, date } = this.props;

                    
        const skillsBorder = skills.map((skill) => {
            if(skills.indexOf(skill) !== (skills.length - 1)) {
                return skill += " - ";
            } else {
                return skill;
            };
        });

        return (
            <div className="item">
                <div className="inner">
                    <img className="logo-company" alt="Company Logo" src="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/507/7/logo/medium_d241551bfce977436052b7f8593b8462.png"/>
                    <span className="date">{date}</span>
                    <div className="info">
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                        <div className="specialization">
                            <span className="sphere">{special} -</span>
                            <span className="grade">{grade}</span>
                        </div>
                        <div className="skills">
                            <p>{skillsBorder}</p>
                        </div>
                        <div className="addition">
                            <a className="name_company">Company: {company}</a>
                            <span className="city">City: {city}</span>
                            <span className="graphic">Graphic: {graphic}</span>
                        </div>
                        <div className="salary">
                            <span>From </span>
                            <span>{salary} rub.</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}