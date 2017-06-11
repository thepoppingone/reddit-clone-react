import React, { Component } from 'react';

export default class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.key,
      upvotes: 0,
    };
  }

  upvote(id){
    console.log('up');
  }

  downvote(id){
    console.log('down');
  }

  render(){
    const {upvotes, id} = this.state;
    const {content} = this.props;

    return (
      <div className='topic'>
        <div className='upvotes'> Votes: {upvotes}</div>
        <div className='content'>{content}</div>
        <button onClick={this.upvote.bind(this, id)} className='up'> Upvote</button>
        <button onClick={this.downvote.bind(this, id)} className='down'> Downvote</button>
      </div>
    );
  }

}
