import React, { Component } from 'react';
import "../styles/Portfolio.css";
import Yelp from './Yelp';
import GTrader from './GTrader';
import GTour from './GTour';

export default class Porfolio extends Component {
  render() {
    return (
      
      <section id="portfolio">
        <h1>★ Check Out Some of My Works as a Software engineer ★</h1>
        <div>
          <hr/>
          <GTour/>
          <hr/>
          <Yelp/>
          <hr/>
          <GTrader/>
          <hr/>
          <p className="ProjectName">To Be Continued ... </p>
        </div>
      
      </section>
        );
  }
}