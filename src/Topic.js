import React, { Component } from 'react';

export default class Topic extends Component {
  constructor() {
    super();

    this.state = {
      upvotes: 0,
    };
  }

  render(){
    const {upvotes} = this.state;
    const {content} = this.props;

    return (
      <div>
        <h1>{content}</h1>
      </div>
    );
  }

}
