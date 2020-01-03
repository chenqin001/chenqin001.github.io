import React, { Component } from 'react';

import pic1 from "../img/spacetrader1.png";
import pic2 from "../img/spacetrader2.png";
import pic3 from "../img/spacetrader3.png";

export default class GTrader extends Component {
    render(){
        return (
        <div className="GTrader">
          <h2 className="ProjectName">Space Trader -- An Android Game</h2>
          <div className="container">
            <div className="GTradeDescription">

                <ul>
                    <li>Implemented a playable classic Palm Pilot game using Android Studio and the MVVM (Model-View-ViewModel) design pattern</li>
                    <li>Followed the process of agile software development</li>
                    <li>Embedded Google map API to create a map for the players to travel</li>
                    <li>Used Firebase to support data storage and store game instance in order to achieve persistence of the game</li>
                </ul> 
                
            </div>
            
            <div className="flexslider">
            <ul className="slides">
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
        </div>
        );
    }
}