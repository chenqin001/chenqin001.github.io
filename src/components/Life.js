import React, { Component } from 'react';
import "../styles/Life.css";
import Map from '../components/Map';


export default class Life extends Component {
  render() {
      return(
        <section id="life">
            <h1 className="title">Life</h1>
            <h5 className="subtitle">★ See what I do in my spare time ★</h5>
            <hr/>
            <p><i class="fas fa-suitcase-rolling"></i>  Me as a traveller  <i class="fas fa-plane"></i></p>
            <Map/>



        </section>

      );
  }
}