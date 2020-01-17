import React, { Component } from 'react';
import "../styles/About.css";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="row">

            <h1 className="title">About</h1>
            <h5 className="subtitle">★ Me in 30 Seconds ★</h5>
            <hr/>
        

            <div className="box">
               <h2 className="center">Summary</h2>
               <div id="summary" className="box-1">
                <p><i class="fas fa-school"></i> Computer science junior @ Georgia Tech</p>
                <p><i class="fab fa-pinterest"></i> Future Pinterest SWE intern</p>
                <p><i class="fas fa-map-marker-alt"></i> Live in Atlanta, GA </p>
                <p><i class="fas fa-laptop-code"></i> Work as a software engineer/AI engineer</p>
               </div>
              
               
            </div>

             <div className="box">

                  <h2 className="center">Skills</h2>
                  <div id="skills" className="box-1">
                    <p>10k+ lines: Java, Python, JavaScript(React)</p>
                    <p>5k+ lines: C, TypeScript, HTML, CSS</p>
                    <p>1k+ lines: C++, Scala, Go</p>
                    <p>Familiar: SQL, OpenGL</p>
                  </div>
                 

            </div>

            <div className="box">
                  <h2 className="center">Contacts</h2>
                  <div id="contacts" className="box-1">
                    <p className="left"><a href="https://www.linkedin.com/in/qin-chen-911011165/" target="_blank" className="fa"><i class="fab fa-linkedin"></i></a>Join my networks</p>
                    <p className="left"><a href="https://github.com/chenqin001" target="_blank" className="fa"><i className="fa fa-github"></i></a>View my codes</p>
                    <p className="left"><a href="https://www.facebook.com/qin.chen.79462815" target="_blank" className="fa"><i class="fab fa-facebook-square"></i></a>Find me on social media</p>
                    <p className="left"><a href="mailto:qchen352@gatech.edu" target="_blank" className="fa"><i class="far fa-envelope"></i></a>DM me </p>
                  </div>
            </div>   
         
      </section>
    );
  }
}