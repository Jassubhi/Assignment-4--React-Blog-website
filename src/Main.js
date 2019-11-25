import React, { Component } from "react";
import './App.css';
import a1 from './a1.jpg';
import b1 from './b1.jpg';
import k1 from './k1.jpg';

class Main extends Component {
    render() {
    const mystyle = {
       float: "left",
       padding: "30px",
       width: "60%",
       height: "1000 px", 
       marginleft: "auto",
       marginright: "auto"
      };
      return (
        <div className="Main" style = {mystyle}>
          <div class="Blog 1">
            <h2><a href="https://en.wikipedia.org/wiki/Aston_Martin">Aston Martin</a></h2>
            <img src={a1} width='70%' height='50%'/>
            <p>Aston Martin Lagonda Global Holdings plc is a British independent manufacturer of luxury sports cars and grand tourers. It was founded in 1913 by Lionel Martin and Robert Bamford. Steered from 1947 by David Brown, it became associated with expensive grand touring cars in the 1950s and 1960s, and with the fictional character James Bond following his use of a DB5 model in the 1964 film Goldfinger. Their sports cars are regarded as a British cultural icon.</p>
            <p>Date:11/15/2019</p>
          </div>
        
          <div class="Blog 2">
            <h2><a href="https://en.wikipedia.org/wiki/Bugatti">Bugatti</a></h2>
            <img src={b1} width='70%' height='50%'/>
            <p>Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then-German city of Molsheim, Alsace by the Italian-born industrial designer Ettore Bugatti. The cars were known for their design beauty and for their many race victories. Famous Bugattis include the Type 35 Grand Prix cars, the Type 41 "Royale", the Type 57 "Atlantic" and the Type 55 sports car.</p>
            <p>11/20/2019</p>
          </div>

          <div class="Blog 3">
            <h2><a href="https://en.wikipedia.org/wiki/Koenigsegg">Koenigsegg</a></h2>
            <img src={k1} width='70%' height='50%'/>
            <p>Koenigsegg Automotive AB is a Swedish manufacturer of high-performance sports cars, based in Ängelholm, Skåne County, Sweden.
            The company was founded in 1994 in Sweden by Christian von Koenigsegg, with the intention of producing a "world-class" sports car. Many years of development and testing led to the CC8S, the company's first street-legal production car which was introduced in 2002.</p>
            <p>11/23/2019</p>
          </div>
        </div>
      );
    }
  }
 
export default Main;