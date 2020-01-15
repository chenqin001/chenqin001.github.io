import React, { Component } from 'react';
import "../styles/Life.css";
import Map from '../components/Map';


export default class Life extends Component {
  render() {
      return(
        <section id="life">
            <h1 className="title">Life</h1>
            <h5 className="subtitle">★ See what I am in the reality ★</h5>
            <hr/>
            <Map/>



        </section>

      );
  }
}