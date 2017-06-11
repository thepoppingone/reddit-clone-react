import React, { Component } from 'react';
import Topic from './Topic';

export default class TopicList extends Component {
  constructor() {
    super();

    this.state = {
      topicList: [],
    };
  }

  render(){
    const {topicList} = this.state;

    return (
      <div>
        <Topic content='hahah'/>
      </div>
    );
  }

}
