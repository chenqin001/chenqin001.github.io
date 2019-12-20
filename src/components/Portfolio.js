import React, { Component } from 'react';
import "../styles/Portfolio.css";
import pic1 from "../img/spacetrader1.png";
import pic2 from "../img/spacetrader2.png";
import pic3 from "../img/spacetrader3.png";
import yelp from "../img/yelp.png";

export default class Porfolio extends Component {
  render() {
    return (
      
      <section id="portfolio">
      <h1>Check Out Some of My Works as a Software engineer.</h1>
      <div className="row">
        <hr/>
        <div className="Yelp">
          <h2>Yelp</h2>
          <h3>blablabla</h3>
          <div className="container">
            <img src={yelp} id="yelpPic"/>
            <div className="description">
              <p>Designed and coded an interactive web page using HTML, CSS, and JavaScript</p>
              <p>Developed a web service using Java servlet to fetch restaurant data from Yelp API using users' locations</p>
              <p>Utilized JSON to transmit restaurant data from Yelp, thus achieved client-server communication</p>
              <p>Used MySQL to store restaurant data, user information and users’ favorite history</p>
              <p>Implemented a content-based recommendation algorithm based on the users’ favorite restaurants</p>
              <p>Deployed this application on Amazon EC2</p>
            </div>

          </div>
        </div>
        <hr/>
        <div className="GTrader">
          <h2>Space Trader (An Android Game)</h2>
          <h3>blablabla</h3>
          <div className="container">
            <div className="description">
              <p>Implemented a playable classic Palm Pilot game using Android Studio and the MVVM (Model-View-ViewModel) design pattern</p>
              <p>Followed the process of agile software development</p>
              <p>Embedded Google map API to create a map for the players to travel</p>
              <p>Used Firebase to support data storage and store game instance in order to achieve persistence of the game</p>
            </div>
            
            <div className="flexslider">
            <ul class="slides">
              <li>
                <img src={pic1} className="GTPic"/>
              </li>
              <li>
                <img src={pic2} className="GTPic"/>
              </li>
              <li>
                 <img src={pic3} className="GTPic"/>
              </li>
            </ul>
          </div>
        </div>
        <hr/>

        <div className="Yelp">
          <h2>GaTech campus self tour APP</h2>
          <h3>blablabla</h3>
          <div className="container">
            <img src={yelp} id="yelpPic"/>
            <div className="description">
              <p>Developed a Web APP for GT tourists using Spring Boot and Hibernate frameworks</p>
              <p>Used React.js for Responsive Web Design (RWD)</p>
              <p>Embedded Leaflet Map API</p>
              <p>Will be released in the recent future to help GT tourists tour the campus</p>
            </div>

          </div>
        </div>
        <hr/>



        
         
          
        </div>
      </div>
  </section>
        );
  }
}