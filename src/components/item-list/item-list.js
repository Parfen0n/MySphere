import React, { Component } from 'react';

import Item from '../item';

import './item-list.css'
export default class ItemList extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render() {

        const { items, numberOfVacancies } = this.props;

        const elements = items.map((item) => {
            const {...itemProps} = item;

            return (
                <Item 
                    {...itemProps}
                />
            )
        })

        return (
            <div className="item-list">
                <div className="search">
                    <div className="amount">
                        <span>
                            {numberOfVacancies} vacancies found
                        </span>
                    </div>
                    <div className="input">
                        <input placeholder="Search by specialization and skills"
                               onChange={this.onSearchChange}
                               value={this.props.term}/>
                    </div>
                    <div className="list">
                        {elements}
                    </div>
                </div>
            </div>
        )
    }
}