import React, { Component } from 'react';

import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-line"></div>
                <div className="footer-company"> MySphere </div>
                <div className="footer-help"> Help </div>
                <div className="footer-documents"> Documents </div>
                <div className="footer-follow"> Follow us on social media </div>
                <div className="footer-about"> About service </div>
                <div className="footer-employee"> For employee </div>
                <div className="footer-user"> User agreement </div>
                <div className="footer-twitter"></div>
                <div className="footer-facebook"></div>
                <div className="footer-vk"></div>
                <div className="footer-instagram"></div>
                <div className="footer-telegram"></div>
                <div className="footer-prices"> Prices </div>
                <div className="footer-employer"> For employer </div>
                <div className="footer-terms"> Terms of service </div>
                <div className="footer-news"> News </div>
                <div className="footer-service"> Service API </div>
                <div className="footer-partners"> Our partners </div>
                <div className="footer-job"> Job catalogue </div>
                <div className="footer-cr-logo"></div>
                <div className="footer-cr-text"> MySphere, 2019</div>
            </footer>
        )
    }
}