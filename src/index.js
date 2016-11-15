import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

import './styles/main.sass';

var App = () => (
  <Clock />
)

ReactDOM.render(<App />, document.getElementById('entry'));
