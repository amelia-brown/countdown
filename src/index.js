import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';


var App = () => (
  <Clock />
)

ReactDOM.render(<App />, document.getElementById('entry'));
