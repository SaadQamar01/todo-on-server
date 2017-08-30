import React from 'react';
import CounterAction from '../action/counter.js'

function counter(state = 0, action) {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return state + 1;
    case CounterAction.DECREMENT:
      return state - 1;
    case CounterAction.INCREMENT_WITH_FIVE:
      return state+action.val;
          case CounterAction.DECREMENT_WITH_FIVE:
      return state-action.val;
          case CounterAction.USER_INPUT:
      return state+action.val;
    default:
      return state
  }
}
export default counter;