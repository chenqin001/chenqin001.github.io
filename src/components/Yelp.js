import React, { Component } from 'react';

import pic from "../img/yelp.png";

export default class Porfolio extends Component {
    render(){
        return (
            <div className="Yelp">
            <h2 className="ProjectName"><i class="fas fa-utensils"></i> Restaurant recommendation system based on Yelp API</h2>
            <a href="http://3.17.27.249:8080/YelpRec/#" target="_blank"><span className="link">>>follow this link to see this project</span></a>
            <div className="container">
              <iframe src="http://3.17.27.249:8080/YelpRec/#" id="iframe" ></iframe>

              <img src={pic} className="YelpPic"/>
             
              <div className="YelpDescription description">
                <ul >
                  <li>Designed and coded an interactive web page using HTML, CSS, and JavaScript</li>
                  <li>Developed a web service using Java servlet to fetch restaurant data from Yelp API using users' locations</li>
                  <li>Utilized JSON to transmit restaurant data from Yelp, thus achieved client-server communication</li>
                  <li>Used MySQL to store restaurant data, user information and users’ favorite history</li>
                  <li>Implemented a content-based recommendation algorithm based on the users’ favorite restaurants</li>
                  <li>Deployed this application on Amazon EC2</li>
                </ul>
              </div>
  
              </div>
            </div>
        );
    }
}