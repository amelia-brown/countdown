import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

import './styles/main.sass';

let year = 2017;

var App = () => (
  <Clock year={year} />
)

ReactDOM.render(<App />, document.getElementById('entry'));
