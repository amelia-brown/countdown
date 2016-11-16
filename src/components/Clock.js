import React, {Component} from 'react';
import Digits from './Digits';
import time from '../utils/getTime.js';
//TODO:
// set up counter for clock
// SASS

//const currentTime = time();

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: time()
    };
    this.updateTime = () => {
      this.setState({currentTime: time()})
    };
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000)}

  render() {
    let {year} = this.props;
    return (
      <div
        className='main-container'>
        <h1
          className='title'>
          New Years {year}
        </h1>
          <div className='countdown-container'>
            {this.state.currentTime.map(({title, digit}) => (
              <Digits digit={digit} title={title} />
            ))}
          </div>
      </div>
    )
  }
};

export default Clock;
