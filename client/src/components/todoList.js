import React, { Component } from 'react';
import store from '../store/index.js'
class TodoList extends Component {
    constructor(){
        super();
        this.state={

        }
    }
del(id){
    this.props.delTodo(id)
}
    render() {
//         console.log(this.props.List);
//         store.subscribe(() =>
//   this.setState(store.getState())
// )

        return (
            <div>
             <ul>
            <h1>Todo List</h1>
            {this.props.List?
                <div>
                {this.props.List.map((data,index)=>(
                    <li key={index}>
                      <h3> {data.todo}<button onClick={this.del.bind(this,data._id)}>Delete</button></h3> 
                    </li>
                ))}
                </div>
                :''}
                </ul>
            </div>
        )
    }
}
export default TodoList;
