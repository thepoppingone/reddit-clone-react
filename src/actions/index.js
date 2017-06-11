export function upvoteTopic(topic){
  return {
    type: 'TOPIC_UPVOTED',
    payload: topic,
  };
}

export function downvoteTopic(topic){
  return {
    type: 'TOPIC_DOWNVOTED',
    payload: topic,
  };
}

export function createTopic(topic){
  console.log('test create');
  return {
    type: 'NEW_TOPIC',
    payload: topic,
  };
}
