import React, { Component } from 'react';

import Item from '../item';

import './item-list.css'
export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <div className="search">
                    <div className="amount">
                        <span>
                            9999 vacancies found
                        </span>
                    </div>
                    <div className="input">
                        <form>
                            <input placeholder="Search by specialization and skills"/>
                        </form>
                    </div>
                    <div className="list">
                        <Item />
                    </div>
                </div>
            </div>
        )
    }
}