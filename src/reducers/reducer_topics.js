const TOPIC_UPVOTED = 'TOPIC_UPVOTED';
const TOPIC_DOWNVOTED = 'TOPIC_DOWNVOTED';
const NEW_TOPIC = 'NEW_TOPIC';

export default function(state = null, action){

  // Set initial state to a default set of 18 topics
  if (state === null){
    return [
      { id: 1, content: 'Hong Kong Typhoon', upvotes:0},
      { id: 2, content: 'SG Uber vs Grap', upvotes:0},
      { id: 3, content: 'SG', upvotes:0},
      { id: 4, content: 'TW', upvotes:0},
      { id: 5, content: 'SK', upvotes:0},
      { id: 6, content: 'Long content is that right?', upvotes:0},
      { id: 7, content: 'Short ', upvotes:0},
      { id: 8, content: 'Such time is long', upvotes:0},
      { id: 9, content: 'Lorem lipsum', upvotes:0},
      { id: 10, content: 'Lorum Dipsum', upvotes:0},
      { id: 11, content: 'tttttttttt', upvotes:0},
      { id: 12, content: 'Second hand items', upvotes:0},
      { id: 13, content: 'Microshops!', upvotes:0},
      { id: 14, content: 'helllllllooooo ', upvotes:0},
      { id: 15, content: 'with much testing', upvotes:0},
      { id: 16, content: 'some of us are here for a long time!', upvotes:0},
      { id: 17, content: 'Ok sure no problem', upvotes:0},
      { id: 18, content: 'eeeeeeelllllllooooo', upvotes:0},
    ];
  }else{

  // Other actions will proceed according to the action type
    const newTopicId = action.payload.id
    const updateIndex = state.findIndex((topic => topic.id === newTopicId));

    switch(action.type){
      case TOPIC_UPVOTED:
        return state.map((topic, index) => {
          if (index === updateIndex) {

            return Object.assign({}, topic, {
              upvotes: action.payload.upvotes + 1,
            })
          }
          return topic;
        })
      case TOPIC_DOWNVOTED:
        return state.map((topic, index) => {
          if (index === updateIndex) {
    
            return Object.assign({}, topic, {
              upvotes: action.payload.upvotes - 1,
            })
          }
          return topic;
        })
      case NEW_TOPIC:
        let newState = state.slice(0);
        newState.push(action.payload);
        return newState;
      default:
        return state;
    }

  }
}
