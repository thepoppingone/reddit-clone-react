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
  return {
    type: 'NEW_TOPIC',
    payload: topic,
  };
}
