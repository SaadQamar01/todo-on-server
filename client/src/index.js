import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './container/App.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from 'react-redux'
import store from './store/index.js'



store.subscribe(() =>
  console.log(store.getState())
)

// store.dispatch({ type: "INCREMENT" })
// store.dispatch({ type: "DECREMENT" })
// store.dispatch({ type: "INCREMENT" })



ReactDOM.render(<Provider store={store}>
  <div>
    <App />
    <div>
      <h1>IN INDEX</h1>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>INCREMENT</button><br/>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  </div>
</Provider>
  , document.getElementById('root'));