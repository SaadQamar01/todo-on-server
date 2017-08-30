import React from 'react';
import CalculatorAction from '../action/calculator.js'

const INIT_STATE={
    result:0
}
function calculator(state = INIT_STATE, action) {
  switch (action.type) {
    case CalculatorAction.MULTIPLICATION:
      return Object.assign({},state,{result:action.firstInput*action.secondInput})
    case CalculatorAction.DIVISION:
      return Object.assign({},state,{result:action.firstInput/action.secondInput})
    default:
      return state
  }
}
export default calculator;