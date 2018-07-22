import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Hero from './component/Hero'
import Main from './component/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header name="Logo"/>
         <Hero />
         <Main />

      </div>
    );
  }
}

export default App;
