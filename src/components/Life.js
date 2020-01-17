import React, { Component } from 'react';
import "../styles/Life.css";
import Map from '../components/Map';


export default class Life extends Component {
  render() {
      return(
        <section id="life">
            <h1 className="title">Life</h1>
            <h5 className="subtitle">★ The real me ★</h5>
            <hr/>
            <p><i class="fas fa-plane"></i>  Me as a traveller  <i class="fas fa-suitcase-rolling"></i></p>
            <p><i class="fas fa-shoe-prints"></i> see my footprints all around the world <i class="fas fa-globe"></i></p>
            <Map/>
            <p>(<i class="fas fa-wrench"></i> This part is still under construction ... )</p>



        </section>

      );
  }
}