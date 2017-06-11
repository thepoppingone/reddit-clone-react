import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import TopicList from './TopicList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    this.setState({
      list: [],
    });
  }

  render() {

    const { list } = this.state;

    return (
      <div className="App">
        <div className='header'> Reddit Sample </div>
        <div className='list'>
          <TopicList list={list}/>
        </div>
      </div>
    );
  }
}

export default App;
