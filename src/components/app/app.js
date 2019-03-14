import React, { Component } from 'react';

import Header from '../header';
import Filter from '../filter'
import RandomVacancy from '../random-vacancy';
import ItemList from '../item-list';
import Pagination from '../pagination';
import Footer from '../footer';

import './app.css';

export default class App extends Component {

    state = {
        vacancies: [
            {
                title: 'Backend developer',
                special: 'Backend',
                grade: 'Middle',
                skills: [
                    'PHP', 'Jquery', 'HTML',
                    'CSS', 'Wordpress'
                ],
                company: 'Email Soldiers',
                city: 'Ryazan',
                graphic: 'Full Day',
                salary: '35 000',
                date: "08.09.11"
            },
            {
                title: 'frontend developer',
                special: 'frontend',
                grade: 'junior',
                skills: [
                    'JS', 'Jquery', 'HTML',
                    'CSS', 'Wordpress'
                ],
                company: 'Soldiers',
                city: 'Moskow',
                graphic: 'Half Day',
                salary: '25 000',
                date: "08.09.11"
            },
            {
                title: 'testing',
                special: 'Testing',
                grade: 'Senior',
                skills: [
                    'Jest', 'Webpack', 'HTML',
                    'CSS', 'Wordpress'
                ],
                company: 'Email',
                city: 'Almaty',
                graphic: 'Full Day',
                salary: '100 000',
                date: "08.09.11"
            }
        ],
        term: ''
    }

    onSearchChange = (value) => {
        this.setState({
            term: value
        })
    }

    search(items, term) {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.skills.join().toLowerCase().indexOf(term.toLowerCase()) > -1  || item.title.toLowerCase().indexOf(term.toLowerCase()) > -1 ;
        })
    }
 
    render() {
        const { vacancies, term } = this.state;

        const searchedVacancies = this.search(vacancies, term);
        const numberVacancies = searchedVacancies.length

        return (
            <div className="my-sphere-app">
                <Header />
                <div className="content">
                    <RandomVacancy />
                    <Filter />
                    <ItemList items={searchedVacancies} 
                              numberOfVacancies={numberVacancies}
                              onSearchChange={this.onSearchChange}/>
                    <Pagination />
                </div>
                <Footer />
            </div>
        )
    }
}