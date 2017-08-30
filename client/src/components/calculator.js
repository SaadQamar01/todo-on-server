import React, { Component } from 'react';
class Calculator extends Component {
    multiply(){
        var input1=parseInt(this.refs.val1.value);
        var input2=parseInt(this.refs.val2.value);
        this.props.multiplication(input1,input2);
    }
    divide(){
        var input1=parseInt(this.refs.val1.value);
        var input2=parseInt(this.refs.val2.value);
        this.props.division(input1,input2);
    }
    render() {
        return (
            <div>
                <h1>In Calculator (Dump Component)</h1>
                <input type="number" ref="val1" /><br />
                <input type="number" ref="val2" /><br />
                <h3>Result: {this.props.result}</h3>
                <button onClick={this.multiply.bind(this)}>MULTIPLY</button><br />
                <button onClick={this.divide.bind(this)}>DIVIDE</button><br />
                <hr/>
            </div>
        )
    }
}
export default Calculator;