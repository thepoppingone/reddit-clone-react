export function upvoteTopic(topic){
  console.log('topic selected: ',topic.content);
  console.log('upvote: ',topic.upvotes);

  return {
    type: 'TOPIC_UPVOTED',
    payload: topic,
  };
}

export function downvoteTopic(topic){
  console.log('topic selected: ',topic.content);
  console.log('downvoted: ',topic.upvotes);

  return {
    type: 'TOPIC_DOWNVOTED',
    payload: topic,
  };
}
