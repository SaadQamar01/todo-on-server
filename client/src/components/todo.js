import React, { Component } from 'react';
class TodoItem extends Component {
    todo(){
        var todoitem=this.refs.todo.value;
        this.props.todo(todoitem);
        this.refs.todo.value="";
    }
    allDeleteTodo(){
             this.props.allTodoDelete();
    }
    render() {
        return (
            <div>
                <h1>In Todo (Dump Component)</h1>
                <input type="text" ref="todo" /><button onClick={this.allDeleteTodo.bind(this)}>Delete All</button><br />
                <button onClick={this.todo.bind(this)}>Add</button><br />
                <hr/>
            </div>
        )
    }
}
export default TodoItem;