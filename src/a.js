import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Nav extends Component {
  
    
      state = {
        googleArticles: [0],
      };
       
      intervalID;
      ComponentDidMount = () => {
        this.getArticles();
      }

      componentWillUnmount() {
        clearTimeout(this.intervalID);
      }
      
    getArticles = () => {
      console.log("Getting articles");
       axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c0833315984d4387aa8ee7b61ff6b964')
        .then(
          res => {
            console.log(res.data.articles);
            this.setState({ googleArticles: this.state.googleArticles.concat(res.data.articles).splice(1,5)});
            this.intervalID = setTimeout(this.getArticles.bind(this),5000);

          }
  
          
        )
        .catch(err => console.log(err))
      
    }  
    
  render() {
     return (
      <div className="Nav">
        <h1>Google Headlines</h1>
         {this.state.googleArticles.map((article, i) =>
            <div>
              <p>{i+1} {article.title}</p>
            </div>
          )}  
      </div>
    )
  
}

}
export default Nav;