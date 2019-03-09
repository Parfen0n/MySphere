import React, { Component } from 'react';

import './filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <form>
                    <div className="categories">
                        <label className="title">Sphere of vacancies</label>
                        <label className="label">
                            <input type="checkbox" value="backend"/>
                            Backend
                        </label>
                        <label className="label">
                            <input type="checkbox" value="applications"/>
                            Applications
                        </label>
                        <label className="label">
                            <input type="checkbox" value="frontend"/>
                            Frontend
                        </label>
                        <label className="label">
                            <input type="checkbox" value="testing"/>
                            Testing
                        </label>
                        <label className="label">
                            <input type="checkbox" value="design"/>
                            Design
                        </label >
                        <label className="label">
                            <input type="checkbox" value="marketing"/>
                            Marketing
                        </label>
                        <label className="label">
                            <input type="checkbox" value="sales"/>
                            Sales
                        </label>
                        <label className="label">
                            <input type="checkbox" value="support"/>
                            Support
                        </label>
                        <label className="label">
                            <input type="checkbox" value="softwaredev"/>
                            Soft. Development
                        </label>
                        <label className="label">
                            <input type="checkbox" value="management"/>
                            Management
                        </label>
                        <label className="label">
                            <input type="checkbox" value="analytics"/>
                            Analytics
                        </label>
                        <label className="label">
                            <input type="checkbox" value="administration"/>
                            Administration
                        </label>
                        <label className="label">
                            <input type="checkbox" value="content"/>
                            Content
                        </label>
                        <label className="label">
                            <input type="checkbox" value="hr"/>
                            HR
                        </label>
                        <label className="label">
                            <input type="checkbox" value="office"/>
                            Office
                        </label>
                        <label className="label">
                            <input type="checkbox" value="Other"/>
                            Other
                        </label>
                    </div>
                    <div className="qualification">
                            <label className="title">
                                Qualification
                            </label>
                            <select>
                                <option value="any">Any</option>
                                <option value="intern">Intern</option>
                                <option value="junior">Junior</option>
                                <option value="middle">Middle</option>
                                <option value="senior">Senior</option>
                                <option value="lead">Lead</option>
                            </select>
                    </div>
                    <div className="skills">    
                        <label className="title">Professional skills</label>
                        <input type="text"/>
                        <button className="bg-green-button" type="button">Add</button>
                    </div>
                    <div className="salary">
                        <label className="title">Salary</label>
                        <div>
                            <input type="text" pattern="^[ 0-9]+$"/>
                            <select>
                                <option>eur.</option>
                                <option>usd.</option>
                                <option>тен.</option>
                                <option>руб.</option>
                            </select>
                        </div>
                    </div>
                    <div className="location">
                        <label className="title">Location</label>
                        <input type="text"/>
                    </div>
                    <div className="company">
                        <label className="title">Company</label>
                        <input type="text" />
                    </div>
                    <div className="type-of-employ">
                        <label className="title">Graphic</label>
                        <select>
                            <option>Any</option>
                            <option>Full day</option>
                            <option>Half day</option>
                        </select>
                    </div>
                    <div className="addition">
                        <label className="title">Addition</label>
                        <label className='label'>
                            <input type="checkbox" value="remote_work"/>
                            Remote work
                        </label>
                        <label className='label'>
                            <input type="checkbox" value="indicated_salary"/>
                            Indicated salary
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}