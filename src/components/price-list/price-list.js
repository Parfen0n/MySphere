import React, { Component } from 'react';

import './price-list.css'

export default class Price extends Component {
    render() {
        return (
            <div className="price">
                <div className="price-title"> Price List </div>
                <div className="price-text"> Each vacancy is paid separately and placed for a period of one month. At the end of the month it can be paid and placed again. Each hosted the vacancy gives one additional day of access to the resume database. </div>
                <div className="region"> Region </div>
                <div className="cost"> Cost of accomodation jobs in a month </div>
                <div className="responses"> Responses to the vacancies  in a month, on average </div>
                <div className="price-line1">
                    <div className="region1"> Without specifying the city (remote work) </div>
                    <div className="cost1"> $55 </div>
                    <div className="response1"> 25 responses </div>
                </div>
                <div className="price-line2">
                    <div className="region2"> Almaty and region, Astana and region </div>
                    <div className="cost2"> $55 </div>
                    <div className="response2"> 31 responses </div>
                </div>
                <div className="price-line3">
                    <div className="region3"> Cities-millionaires </div>
                    <div className="cost3"> $40 </div>
                    <div className="response3"> 18 responses </div>
                </div>
                <div className="price-line4">
                    <div className="region4"> Other cities of Kazakhstan </div>
                    <div className="cost4"> $30 </div>
                    <div className="response4"> 8 responses </div>
                </div>
                <div className="line"></div>
                <div className="bottom-text"> All prices are quoted in US dollars and include VAT of 20%. To get the discount write to us msfakebusiness@gmail.com </div>
            </div>
        )
    }
}