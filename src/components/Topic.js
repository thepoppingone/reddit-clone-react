import React, { Component } from 'react';

export default class Topic extends Component {

  upvote(){
    const { topic } = this.props;
    this.props.upvoteAction(topic);
  }

  downvote(){
    const { topic } = this.props;
    this.props.downvoteAction(topic);
  }

  render(){
    const {topic} = this.props;
    return (
      <div className='topic'>
        <div className='upvotes'> Votes: {topic.upvotes}</div>
        <div className='content'>{topic.content}</div>
        <button onClick={this.upvote.bind(this)} className='up'> Upvote</button>
        <button onClick={this.downvote.bind(this)} className='down'> Downvote</button>
      </div>
    );
  }

}
