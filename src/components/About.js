import React, { Component } from 'react';
import "../styles/About.css";
export default class About extends Component {
  render() {
    return (
      <section id="about" className="row">
        

            <div className="box">
               <h2 className="center">About Me</h2>
               <p>I am an undergraduate computer science senior looking for a full-time position as a software engineer.</p>
               <p>I have over 4 years of experience in Java programming and working on projects at all stages of the Software Development Life Cycle (SDLC) from idea to development to delivery of the completed product. </p>
               <p>Excels at learning new technologies and applying them to develop clean and well-structured code.  </p>
              
              
               
            </div>

             <div className="box">

                  <h2 className="center">Skills</h2>
                  <p>blablabla</p>
                 
                 

            </div>

            <div className="box">
                  <h2 className="center">Contacts</h2>
                  <div className="center">
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