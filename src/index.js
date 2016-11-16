import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import {year} from './utils/getTime';
import './styles/main.sass';

let newYear = year + 1;

var App = () => (
  <Clock year={newYear} />
)

ReactDOM.render(<App />, document.getElementById('entry'));
