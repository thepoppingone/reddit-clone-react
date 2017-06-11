import React, { Component } from 'react';
import Topic from './../components/Topic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upvoteTopic, downvoteTopic } from '../actions/index';

class TopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicList: props.topics,
    };
  }

  renderList(){
    if (this.props.topics.length){

      const sortedTopics = this.props.topics.slice(0).sort(function(a, b) {
        return parseFloat(b.upvotes) - parseFloat(a.upvotes);
      });

      return sortedTopics.map((t,i) => {
        console.log("with length: ",t);
        return (
          <div key={i}>
            <Topic key={t.key} topic={t} upvoteAction={(topic) => this.props.upvoteTopic(topic)} downvoteAction={(topic) => this.props.downvoteTopic(topic)}/>
          </div>
        )
      });
    }else{
        console.log("no length",this.props.topics);
    }
  }

  render(){
    return (
      <div>
        {this.renderList()}
      </div>
    )
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
    upvoteTopic: upvoteTopic,
    downvoteTopic: downvoteTopic,
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
