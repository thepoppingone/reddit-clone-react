import React, { Component } from 'react';

export default class Topic extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   key: props.key,
    //   topic: props.topic,
    // };
  }

  upvote(){
    const { topic } = this.props;
    let updatedTopic = Object.assign({}, topic);
    updatedTopic.upvotes += 1;

    this.props.upvoteAction(updatedTopic);
  }

  downvote(){
    const { topic } = this.props;
    let updatedTopic = Object.assign({}, topic);
    updatedTopic.upvotes -= 1;

    this.props.downvoteAction(updatedTopic);
  }

  render(){
    const {key, topic} = this.props;
    console.log(topic);
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
