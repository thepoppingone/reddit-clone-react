import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { ConnectedApp, App } from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

import * as actions from './actions/index'
import reducer from './reducers/reducer_topics'

let store = createStore(rootReducer);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div);
});


test('Check for invalid input of string size 0', () => {
  const wrapper = shallow(
    <App /> );
   expect(wrapper.instance().checkValidInput('')).toEqual(false);
});

test('Check for invalid input of string size > 255', () => {
  const wrapper = shallow(
    <App /> );
  let str = new Array(256+1).join('t');
  expect(wrapper.instance().checkValidInput(str)).toEqual(false);
});

test('Check for valid input of string size between 0 and 255', () => {
  const wrapper = shallow(
    <App /> );
  let str = new Array(200+1).join('t');
  expect(wrapper.instance().checkValidInput(str)).toEqual(true);
});


describe('actions', () => {
  it('should create an action to add a new topic ', () => {
    const topic = {
      id: 15,
      content: 'test',
      upvotes: 0,
    };
    const expectedAction = {
      type: 'NEW_TOPIC',
      payload: topic,
    };
    expect(actions.createTopic(topic)).toEqual(expectedAction);
  })

  it('should create an action to upvote a topic ', () => {
    const topic = {
      id: 15,
      content: 'test',
      upvotes: 1,
    };
    const expectedAction = {
      type: 'TOPIC_UPVOTED',
      payload: topic,
    };
    expect(actions.upvoteTopic(topic)).toEqual(expectedAction);
  })

  it('should create an action to downvote topic ', () => {
    const topic = {
      id: 15,
      content: 'test',
      upvotes: -1,
    };
    const expectedAction = {
      type: 'TOPIC_DOWNVOTED',
      payload: topic,
    };
    expect(actions.downvoteTopic(topic)).toEqual(expectedAction);
  })
})

describe('topics reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
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
    ])
  })

  it('should handle creation of topic', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            content: 'topic 1',
            upvotes: 0,
          }
        ],
        {
          type: 'NEW_TOPIC',
          payload: { id: 2, content: 'topic 2', upvotes:0},
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          content: 'topic 1',
          upvotes: 0,
        },
        {
          id: 2,
          content: 'topic 2',
          upvotes: 0,
        }
      ]
    )
  })

  it('should upvote the selected topic', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            content: 'topic 1',
            upvotes: 0,
          }
        ],
        {
          type: 'TOPIC_UPVOTED',
          payload: {
            id: 1,
            content: 'topic 1',
            upvotes: 0,
          }
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          content: 'topic 1',
          upvotes: 1,
        }
      ]
    )
  })


    it('should upvote the selected topic', () => {
      expect(
        reducer(
          [
            {
              id: 1,
              content: 'topic 1',
              upvotes: 0,
            }
          ],
          {
            type: 'TOPIC_DOWNVOTED',
            payload: {
              id: 1,
              content: 'topic 1',
              upvotes: 0,
            }
          }
        )
      ).toEqual(
        [
          {
            id: 1,
            content: 'topic 1',
            upvotes: -1,
          }
        ]
      )
    })

})
