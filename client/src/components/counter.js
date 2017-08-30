import React, { Component } from 'react';
class Counter extends Component {
    userInputFromDumpComponent(){
        var inp=parseInt(this.refs.num.value);
        this.props.userInput(inp);
    }
    render() {
        return (
            <div>
                <h1>In Counter (Dump Component)</h1>
                <h3>Counter {this.props.counter}</h3>
                <input type="number" ref="num" /><br />
                <button onClick={this.userInputFromDumpComponent.bind(this)}>USER_INPUT</button><br />
                <hr/>
            </div>
        )
    }
}
export default Counter;