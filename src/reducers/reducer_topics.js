export default function(state = null, action){

  console.log("action",action);
  console.log("state",state);

  if (state === null){
    return [
      { id: 1, content: 'topic 1', upvotes:0},
      { id: 2, content: 'HK', upvotes:0},
      { id: 3, content: 'SG', upvotes:0},
      { id: 4, content: 'TW', upvotes:0},
      { id: 5, content: 'SK', upvotes:0},
      { id: 6, content: 'Funny', upvotes:0},
      { id: 7, content: 'Not really', upvotes:0},
    ];
  }else{
    const newTopicId = action.payload.id
    const updateIndex = state.findIndex((topic => topic.id == newTopicId));

    console.log("updateIndex",updateIndex);

    return state.map((topic, index) => {
            if (index === updateIndex) {
              // Copy the object before mutating
              return Object.assign({}, topic, {
                upvotes: action.payload.upvotes,
              })
            }
            return topic;
          })

    // Object.assign({}, state
    //
    // this.state[updateIndex]
    //
    // return Object.assign({}, state, {
    //     state[updateIndex].upvotes : payload.upvotes,
    //   });

  }
}

// export default function(state = null, action){
//   switch (action.type) {
//     case 'TOPIC_UPVOTED':
//       return action.payload
//     case 'TOPIC_DOWNVOTED':
//       return action.payload
//   }
//
//   return state;
// }
