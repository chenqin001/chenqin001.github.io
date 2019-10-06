import React, { Component } from 'react'
import Card from './Card.js';
import './App.css';

// npm start ==> http://localhost:3000/


class App extends Component {

  // 也可以把state写在外面
  // state = {
  //   name: 'beastman',
  //   renderName: 'beastman'
  // };
  // constructor(props) {
  //   super(props);  
  // }



  render() {
    // let greeting = `H ${this.state.renderName}!`.split('');
    // let cards = greeting.map(c => {
    //   return <Card content={c} />;
    // });

    return (
     
      <div className="App">
         
         {/* the container */}
          <div className='Card-container'>

            <Card name = "🌟🧭 GT Tour" 
            description="A web APP developed for Georgia Tech self-guided campus tours"
            tags = "Web App,React.js,Google Map API"
            />

            <Card name = "🚀 Space Trader" 
            description="An Android APP that reintroduces a timeless strategy game"
            tags = "Android,Native APP,Google Map API"
            />

            <Card name = "🌟🍜 Yelp Recommend" 
            description="A restaurant recommendation website based on Yelp API"
            tags="Web Application,Recommendation System,Java"
            />

            <Card name = "🃏 Alice in Wonderland" 
            description="A web based digital artwork"
            tags = "TypeScript,Node.js"
            />

            <Card name = "🌟📊 project name" 
            description="description"
            />

            <Card name = "🌟🗺️ project name" 
            description="description"
            />
           
          </div>
      </div>
    );
  } 
}
export default App;