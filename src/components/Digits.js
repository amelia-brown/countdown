import React from 'react';

const DigitContainer = ({digit, title}) => (
  <div
    className='countdown-section'>
    <h2 className='subtitle'>{title}</h2>
    <div
      className='digit-container'>
      {digit.toString().split('').map((number) => (
        <div
          className='digit'>
          {number}
        </div>
      ))}
    </div>
  </div>
)

export default DigitContainer;
