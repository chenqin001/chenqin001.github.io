import React, { Component } from 'react';

export default class Porfolio extends Component {
    render(){
        return (
            <div className="Yelp">
            <h2 className="ProjectName">Restaurant recommendation system based on Yelp API</h2>
            <a href="http://3.17.27.249:8080/YelpRec/#" target="_blank">>>follow this link to see this project</a>
            <div className="container">
              <iframe src="http://3.17.27.249:8080/YelpRec/#" id="iframe" ></iframe>
             
              <div className="YelpDescription">
                <p>Designed and coded an interactive web page using HTML, CSS, and JavaScript</p>
                <p>Developed a web service using Java servlet to fetch restaurant data from Yelp API using users' locations</p>
                <p>Utilized JSON to transmit restaurant data from Yelp, thus achieved client-server communication</p>
                <p>Used MySQL to store restaurant data, user information and users’ favorite history</p>
                <p>Implemented a content-based recommendation algorithm based on the users’ favorite restaurants</p>
                <p>Deployed this application on Amazon EC2</p>
              </div>
  
              </div>
            </div>
        );
    }
}