import React, { Component } from 'react';
import Tag from "./tag.js"


class Card extends Component{


    constructor(props){
        super(props);
        this.state={
            name:"name",
            description:"",
            tags:"",
            img:"spacetrader3.png",
            link:""
        }
    }

    render(){
       
        let t = `${this.props.tags}`.split(',');
        let tags = t.map(c => {
          return <Tag content={c} />;
        });

        return (
            <div className='Card'>
                <h5>{this.props.name+": "+this.props.description}</h5>
                <div>
                    <img src={this.props.img} width="100" height="200" alt=""/>
                </div>
               
                
                <div className = "tagContainer">
                   
                    {tags}
                   
                </div>
                
            
            
            </div>
           
        );
    }
}

export default Card;