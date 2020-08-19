import React, { Component } from 'react';
import styleClasses from './App.css';
import Layout from '../components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={styleClasses.App}>
        <Layout />
      </div>
    ); 
  }
}

export default App;
