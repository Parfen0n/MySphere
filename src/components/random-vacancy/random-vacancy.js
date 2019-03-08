import React, { Component } from 'react';

import "./random-vacancy.css"

export default class RandomVacancy extends Component {
    render() {
        return (
            <div className="random-vacancy">
                <div className="content">
                    <div className="title">
                        <h3>
                            PHP Developer
                        </h3>
                    </div>
                    <div className="meta">
                        <span>
                            Полный рабочий день
                        </span>
                        <i className="fas fa-circle fa-xs"></i>
                        <span>
                            Можно удаленно
                        </span>
                    </div>
                    <div className="description">
                        <p>
                            retailCRM — это крупнейшая CRM для омниканальной и онлайн-торговли. Мы делаем лучшее решение на рынке, которое помогает эффективно развивать и масштабировать бизнес наших клиентов.
                            Наш проект работает как SaaS, которым каждый день пользуются несколько тысяч клиентов.
                        </p>
                    </div>
                    <button type="button" className="bg-green-button">
                        More
                    </button>
                </div>
                <div className="company-info">
                        <img alt="Company Logo" src="https://habrastorage.org/getpro/moikrug/uploads/company/100/006/532/5/logo/medium_235cc58b1e15542a20995c4330a06528.png"/>
                    <div className="title">
                        <a>retailCRM</a>
                    </div>
                    <div className="source">
                        <a>
                            retailcrm.es
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}