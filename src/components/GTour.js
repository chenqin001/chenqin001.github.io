import React, { Component } from 'react';

import pic from "../img/GTour.png";


export default class GTour extends Component {
    render(){
        return (
        <div className="GTrader">
          <h2 className="ProjectName">GT sustainability self tour</h2>
          {/* <a href="http://3.17.27.249:8080/YelpRec/#" target="_blank"><h5 className="link">>>follow this link to see this project</h5></a> */}
          <div className="container">
            <div className="GTourDescription">
                <ul>
                    <li>Build a self-guided campus tour Web APP, for Georgia Tech Sustainability Office</li>
                    <li>Implement Responsive Web Design (RWD) using React.js</li>
                    <li>Integrate Leaflet map API to display the map of Georgia Tech campus</li>
                    <li>This project will be released in the recent future to help GT tourists tour the campus</li>
                </ul> 
            </div>
            <img src={pic} className="GTour"/>
        
        </div>
        </div>
        );
    }
}