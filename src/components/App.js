import React, { Component } from 'react';
// import logo from './logo.svg';
import './../App.css';

import TopicList from './../containers/TopicList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTopic } from '../actions/index';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      isCreatingTopic: false,
      input: '',
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

  toggleCreateModal(){
    this.setState({
      isCreatingTopic: !this.state.isCreatingTopic,
      input: '',
    });
  }

  createTopic(){
    const topic = {
      id: 10,
      content: this.state.input,
      upvotes: 0,
    };

    this.props.createTopic(topic);
    this.toggleCreateModal();
  }

  handleChange(e){
    this.setState({ input: e.target.value });
  }

  render() {

    const { list, isCreatingTopic, input} = this.state;
    console.log("list", list);

    return (
      <div className="App">
        <div className='header'> Reddit Sample </div>
        { isCreatingTopic ?
          <div>
            <input placeholder='Enter new topic content' value={input} onChange={this.handleChange.bind(this)}/>
            <button className='add-button' onClick={this.createTopic.bind(this)}> Add Topic </button>
            <button className='cancel-button' onClick={this.toggleCreateModal.bind(this)}> Cancel Topic </button>
          </div>
          :
          <div>
            <button className='create-button' onClick={this.toggleCreateModal.bind(this)}> Create Topic </button>
            <div className='list'>
              <TopicList/>
            </div>
          </div>
         }

      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    createTopic: createTopic,
   }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
