import React from 'react';
import CalculatorAction from '../action/calculator.js'
import ActionTodo from '../action/todo.js'


function todo(state = [], action) {
  switch (action.type) {
    case ActionTodo.ADD_TODO:
      return action.todoArry
    case ActionTodo.DELETE_TODO:
      state.splice(action.index, 1)
      return state
    case ActionTodo.DELETE_ALL_TODO:
      state.splice(0)
      return state
    default:
      return state
  }
}
export default todo;