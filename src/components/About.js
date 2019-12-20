import React, { Component } from 'react';
import "../styles/About.css";
export default class About extends Component {
  render() {
    return (
      <section id="about">



         <div className="row">

            <div className="about">
               <h2>About Me</h2>
               <p>blablabla</p>
            </div>

             <div className="skills">

                  <h2>Skills</h2>
                  <p>blablabla</p>
            </div>

            <div className="contacts">
                  <h2>Contacts</h2>
                  <a href="https://www.linkedin.com/in/qin-chen-911011165/" target="_blank" className="fa"><i className="fa fa-linkedin"></i></a>
                  <a href="https://github.com/chenqin001" target="_blank" className="fa"><i className="fa fa-github"></i></a>
                  <a href="https://www.facebook.com/qin.chen.79462815" target="_blank" className="fa"><i className="fa fa-facebook-square"></i></a>
                  <a href="mailto:qchen352@gatech.edu" target="_blank" className="fa"><i className="fa fa-envelope"></i></a>
            </div>   
         </div>
      </section>
    );
  }
}