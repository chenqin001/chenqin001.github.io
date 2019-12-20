import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Portfolio/>
        <Footer />
      </div>
    );
  }
}

export default App;