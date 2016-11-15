import React from 'react';
import Digits from './Digits';

//TODO:
// set up karma/jasmine/enzyme testing
// set up counter for clock
// SASS

const time = [
  {
    title: 'days',
    digit: 21,
  },
  {
    title: 'hours',
    digit: 20,
  },
  {
    title: 'minutes',
    digit: 19,
  },
  {
    title: 'seconds',
    digit: 18,
  }
]

const Clock = ({year}) => (
  <div>
    <h1>New Years {year}</h1>
    {time.map(({title, digit}) => (
      <Digits digit={digit} title={title} />
    ))}
  </div>
);

export default Clock;
