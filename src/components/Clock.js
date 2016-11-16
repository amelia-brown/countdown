import React, {Component} from 'react';
import Digits from './Digits';
import {getTime} from '../utils/getTime.js';
//TODO:
// set up counter for clock
// SASS

//const currentTime = time();

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: getTime()
    };
    this.updateTime = () => {
      this.setState({currentTime: getTime()})
    };
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000)
  }

  render() {
    let colon, {year} = this.props;
    return (
      <div
        className='main-container'>
        <h1
          className='title'>
          New Years {year}
        </h1>
          <div className='countdown-container'>
            {this.state.currentTime.map(({title, digit}, i) => {
              if (i > 0) {
                colon = true;
              }
              return (
                <Digits digit={digit} title={title} />
              )
            })}
          </div>
        {colon ? <span className='colon'> : </span> : ''}
      </div>
    )
  }
};

export default Clock;
