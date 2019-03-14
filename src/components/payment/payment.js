import React, { Component } from 'react';

import './payment.css'

export default class Payment extends Component {
    render() {
        return (
            <div className="pay">
                <div className="payment-title"> Payment Methods </div>
                <div className="payment-text"> All payment methods are available for individuals and legal entities. All services are paid from the company profile. You can pay them and as a physical person, and as a legal person (by bank transfer) of your choice. </div>
                <div className="credit-card"></div>
                <div className="yandex"></div>
                <div className="paypal"></div>
                <div className="webmoney"></div>
                <div className="cash"></div>
                <div className="credit-card-text"> Credit Card </div>
                <div className="yandex-text"> Yandex.Money </div>
                <div className="paypal-text"> PayPal </div>
                <div className="webmoney-text"> Webmoney </div>
                <div className="cash-text"> Cash </div>
            </div>
        )
    }
}