import React from 'react';

const DigitContainer = ({digit, title}) => {
  let formattedDigit = digit.toString().length < 2
    ? '0' + digit
    : '' + digit;
  return (
    <div
      className='countdown-section'>
      <h2 className='subtitle'>{title}</h2>
      <div
        className='digit-container'>
        {formattedDigit.split('').map((number) => (
          <div
            className='digit'>
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DigitContainer;
