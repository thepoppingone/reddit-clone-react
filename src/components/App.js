import React, { Component } from 'react';
// import logo from './logo.svg';
import './../App.css';

import TopicList from './../containers/TopicList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTopic } from '../actions/index';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      isCreatingTopic: false,
      throwError: false,
      input: '',
    };
  }

  toggleCreateScreen(){
    // Always reset the input values upon toggle
    this.setState({
      isCreatingTopic: !this.state.isCreatingTopic,
      throwError: false,
      input: '',
    });
  }

  createTopic = (input) => {
    if (this.checkValidInput(input)) {
      console.log(this.props.topics);
          const topic = {
            id: this.props.topics.length+1,
            content: input,
            upvotes: 0,
          };
          this.props.createTopic(topic);
          this.toggleCreateScreen();
    }else {
      this.setState({
        throwError: true,
      })
    }

  }

  // Handles the input's value at any point of time
  handleChange(e){
    this.setState({ input: e.target.value });
  }

  // Allows enter key to trigger create topic function
  handleKeyPress = (input, e) => {
    if(e.key === 'Enter'){
      this.createTopic(input);
    }
  }

  checkValidInput(input){
    if (input.length > 0 && input.length <= 255) {
      return true;
    }else {
      return false;
    }
  }

  render() {

    const { isCreatingTopic, input, throwError} = this.state;

    return (
      <div className="App">
        <div className='header'> Reddit Top 20 [Default user: user1] </div>
        { isCreatingTopic ?
          <div>
            <input autoFocus placeholder='Enter new topic content' onKeyPress={this.handleKeyPress.bind(this, input)} value={input} onChange={this.handleChange.bind(this)}/>
            <button className='add-button' onClick={this.createTopic.bind(this, input)}> Add Topic </button>
            <button className='cancel-button' onClick={this.toggleCreateScreen.bind(this)}> Cancel Topic </button>

            {
              throwError ?
              <div><br/>Please enter some text not more than 255 characters</div>
              : ''
            }

          </div>
          :
          <div>
            <button className='create-button' onClick={this.toggleCreateScreen.bind(this)}> Create Topic </button>
            <div className='list'>
              <TopicList/>
            </div>
          </div>
         }

      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    topics: state.topics,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    createTopic: createTopic,
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
