import React from 'react';
import { createStore } from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import counter from './reducer/counter.js'
import calculator from './reducer/calculator.js'
import todo from './reducer/addTodo.js'
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);
var combineReducer=combineReducers({counter,calculator,todo});
let store = createStore(combineReducer,middleware);

export default store;