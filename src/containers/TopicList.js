import React, { Component } from 'react';
import Topic from './../components/Topic';
import { connect } from 'react-redux';

class TopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicList: props.topics,
    };
  }

  renderList(){

    if (this.props.topics !== undefined){
      return this.props.topics.map((topic,i) => {
        return (
          <li key={i}>{topic.content}</li>
        )
      });
    }else{
        console.log(this.props.topics);
    }
  }

  render(){
    // const {topicList} = this.state;
    // console.log(topicList);
    //
    //
    // if (topicList.length){
    //   const topics = topicList.map((t, i) => (
    //       <div key={i}>
    //         {/* <Topic key={t.key} topic={t}/> */}
    //         <div>test</div>
    //       </div>
    //     )
    //   );
    //
    //   return topics;
    // }else {
    //   return (
    //     <div> Not loaded yet</div>
    //   );
    // }
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }

}

function mapStateToProps(state){
  // Returns the items to the props
  return {
    topics: state.topics,
  };
}

export default connect(mapStateToProps)(TopicList)
