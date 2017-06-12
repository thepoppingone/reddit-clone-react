import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { App } from './components/App';
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

  // node.value = 'giraffe';
  // ReactTestUtils.Simulate.change(node);
  // ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
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
      { id: 1, content: 'topic 1', upvotes:0},
      { id: 2, content: 'HK', upvotes:0},
      { id: 3, content: 'SG', upvotes:0},
      { id: 4, content: 'TW', upvotes:0},
      { id: 5, content: 'SK', upvotes:0},
      { id: 6, content: 'Long content is that right?', upvotes:0},
      { id: 7, content: 'Short ', upvotes:0},
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
