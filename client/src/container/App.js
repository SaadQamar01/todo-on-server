import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import Counter from '../components/counter.js';
import TodoItem from '../components/todo.js';
import TodoList from '../components/todoList.js';
import CounterAction from '../store/action/counter.js';
import CalculatorAction from '../store/action/calculator.js';
import ActionTodo from '../store/action/todo.js';
import Calculator from '../components/calculator.js';
import CounterMiddleware from '../store/middleWare/counterMiddleWare.js';
import TodoMiddleware from '../store/middleWare/todoMiddleWare.js';

function mapStateToProps(state) {
  return {
    counter: state.counter,
    calculatorResult: state.calculator.result,
    todoList: state.todo
  };
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(CounterMiddleware.asyncIncrement()),
    decrement: () => dispatch(CounterMiddleware.asyncDecrement()),
    incrementWithFive: () => dispatch(CounterAction.incrementWithFive(5)),
    decrementWithFive: () => dispatch(CounterAction.decrementWithFive(5)),
    changeWithValue: function (data) {
      return dispatch(CounterMiddleware.asyncUserInput(data))
    },
    multiplication: (value1, value2) => dispatch(CalculatorAction.multiplicationAction(value1, value2)),
    division: (value1, value2) => dispatch(CalculatorAction.divisionAction(value1, value2)),
    todoItems: (todoItem) => dispatch(TodoMiddleware.asyncAddTodo(todoItem)),
    loadItems: () => dispatch(TodoMiddleware.asyncLoadTodo()),
    deleteAllTodoItems: () => dispatch(TodoMiddleware.asyncDeleteAllTodo()),
    delItem: (index) => dispatch(TodoMiddleware.asyncDeleteTodo(index)),
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentVal: ''
    }
  }

componentDidMount(){
this.props.loadItems();
}
  userInput(data) {
    // var inp=parseInt(this.refs.num.value);
    // console.log(inp);
    this.props.changeWithValue(data);
    // this.incrementWithValue(this.state.currentVal)
  }
  multiply(firstData, secondData) {
    this.props.multiplication(firstData, secondData);
  }
  divide(firstData, secondData) {
    this.props.division(firstData, secondData);
  }
  todo(todoItem) {
       var todoObj = {
      todoItem: todoItem
    }
    this.props.todoItems(todoItem);
  }
  deleteTodo(del) {
    this.props.delItem(del);
  }
  allDelete() {
    this.props.deleteAllTodoItems();
  }
  render() {
    return (
      <div >
        <TodoItem todo={this.todo.bind(this)} allTodoDelete={this.allDelete.bind(this)} /><hr />
        <TodoList List={this.props.todoList} delTodo={this.deleteTodo.bind(this)} /><hr />
        <Counter counter={this.props.counter} userInput={this.userInput.bind(this)} /><hr />
        <Calculator result={this.props.calculatorResult} division={this.divide.bind(this)} multiplication={this.multiply.bind(this)} /><br />
        <h2> App {this.props.counter}</h2><br />
        <h1>In Container (Smart Component)</h1>
        <button onClick={this.props.increment}>INCREMENT</button><br />
        <button onClick={this.props.decrement}>DECREMENT</button><br />
        <button onClick={this.props.incrementWithFive}>INCREMENTwithFive</button><br />
        <button onClick={this.props.decrementWithFive}>DECREMENTwithFive</button><br />
        <hr />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;
