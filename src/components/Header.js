import React, { Component } from 'react';
import "../styles/Header.css";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation"></a>
            <a className="mobile-btn" href="#" title="Hide navigation"></a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Hi, I am Qin</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Welcome to my world </h3>
               <h6 style={{color:'#fff', fontFamily:'sans-serif '}}>Scroll down to explore </h6>
               <a className="smoothscroll" href="#about" id="down"><i class="fa fa-angle-double-down"></i></a>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}