import React, { Component } from 'react';

import Credit from './img/credit-card.png';
import Yandex from './img/yandex.png';
import Paypal from './img/paypal.png';
import Webmoney from './img/webmoney.png';
import Cash from './img/cash.png';

import './payment.css'

export default class Payment extends Component {
    render() {
        return (
            <div className="pay">
                <div className="payment-title"> Payment Methods </div>
                <div className="payment-text"> All payment methods are available for individuals and legal entities. All services are paid from the company profile. You can pay them and as a physical person, and as a legal person (by bank transfer) of your choice. </div>
                <div className="credit-card"><img src={Credit} alt="Credit"/></div>
                <div className="yandex"><img src={Yandex} alt="Yandex"/></div>
                <div className="paypal"><img src={Paypal} alt="Paypal"/></div>
                <div className="webmoney"><img src={Webmoney} alt="Webmoney"/></div>
                <div className="cash"><img src={Cash} alt="Cash"/></div>
                <div className="credit-card-text"> Credit Card </div>
                <div className="yandex-text"> Yandex.Money </div>
                <div className="paypal-text"> PayPal </div>
                <div className="webmoney-text"> Webmoney </div>
                <div className="cash-text"> Cash </div>
            </div>
        )
    }
}