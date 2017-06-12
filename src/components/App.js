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
      throwError: false,
      input: '',
    };
  }

  componentDidMount(){

  }

  toggleCreateModal(){
    this.setState({
      isCreatingTopic: !this.state.isCreatingTopic,
      throwError: false,
      input: '',
    });
  }

  createTopic(){

    const { input } = this.state;

    if (input.length > 0 && input.length <= 255) {
          const topic = {
            id: this.props.topics.length+1,
            content: input,
            upvotes: 0,
          };

          this.props.createTopic(topic);
          this.toggleCreateModal();
    }else {
      this.setState({
        throwError: true,
      })
    }

  }

  handleChange(e){
    this.setState({ input: e.target.value });
  }

  render() {

    const { list, isCreatingTopic, input, throwError} = this.state;
    console.log("list", list);

    return (
      <div className="App">
        <div className='header'> Reddit Sample </div>
        { isCreatingTopic ?
          <div>
            <input placeholder='Enter new topic content' value={input} onChange={this.handleChange.bind(this)}/>
            <button className='add-button' onClick={this.createTopic.bind(this)}> Add Topic </button>
            <button className='cancel-button' onClick={this.toggleCreateModal.bind(this)}> Cancel Topic </button>

            { throwError ? <div><br/>Please enter some text not more than 255 characters</div> :
          '' }

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

function mapStateToProps(state){
  // Returns the items to the props
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
