const TOPIC_UPVOTED = 'TOPIC_UPVOTED';
const TOPIC_DOWNVOTED = 'TOPIC_DOWNVOTED';
const NEW_TOPIC = 'NEW_TOPIC';

export default function(state = null, action){

  const update = (state, mutations) => Object.assign({}, state, mutations);

  if (state === null){
    return [
      { id: 1, content: 'topic 1', upvotes:0},
      { id: 2, content: 'HK', upvotes:0},
      { id: 3, content: 'SG', upvotes:0},
      { id: 4, content: 'TW', upvotes:0},
      { id: 5, content: 'SK', upvotes:0},
      { id: 6, content: 'Long content is that right?', upvotes:0},
      { id: 7, content: 'Short ', upvotes:0},
    ];
  }else{

    const newTopicId = action.payload.id
    const updateIndex = state.findIndex((topic => topic.id === newTopicId));

    switch(action.type){
      case TOPIC_UPVOTED:
        return state.map((topic, index) => {
          if (index === updateIndex) {
            // Copy the object before mutating
            return Object.assign({}, topic, {
              upvotes: action.payload.upvotes + 1,
            })
          }
          return topic;
        })
        break;
      case TOPIC_DOWNVOTED:
        return state.map((topic, index) => {
          if (index === updateIndex) {
            // Copy the object before mutating
            return Object.assign({}, topic, {
              upvotes: action.payload.upvotes - 1,
            })
          }
          return topic;
        })
        break;
      case NEW_TOPIC:
        let newState = state.slice(0);
        newState.push(action.payload);
        return newState;
      default:
        return state;
    }

  }
}
