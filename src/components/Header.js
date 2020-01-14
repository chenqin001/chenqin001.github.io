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
               <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">HI, I'M QIN</h1>
               <p> -- a creater, not only a developr</p>

            </div>

            
            <div>
               <h4 style={{color:'#fff', fontFamily:'Georgia-serif '}}>Welcome to my space </h4>
               <h5 style={{color:'#fff', fontFamily:'Georgia-serif '}}>Scroll down to explore </h5>
               <i style={{color:'#fff', display:'block',paddingBottom:'30px'}} class="fas fa-globe-asia fa-3x"></i>
               <a className="smoothscroll" href="#about" id="down"><i className="fa fa-angle-double-down"></i></a>
            </div>
         </div>

      </header>
      </React.Fragment>
    );
  }
}