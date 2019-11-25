import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Main/>
      <Nav/>	
      <Footer/>
    </div>
  );
}
}

export default App;
