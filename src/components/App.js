import React, { Component } from 'react';
// import logo from './logo.svg';
import './../App.css';

import TopicList from './../containers/TopicList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  componentDidMount(){
    this.setState({
      list: this.createSampleTopics(),
    });
  }

  createSampleTopics(){
    const topic1 = {
      id: 1,
      content: 1,
      upvotes: 0,
    };

    const topic2 = {
      id: 2,
      content: 2,
      upvotes: 0,
    };

    var array1 = [];
    array1.push(topic1);
    array1.push(topic2);

    return array1;
  }

  render() {

    const { list } = this.state;
    console.log("list", list);

    return (
      <div className="App">
        <div className='header'> Reddit Sample </div>
        <div className='list'>
          <TopicList/>
        </div>
      </div>
    );
  }
}

export default App;
