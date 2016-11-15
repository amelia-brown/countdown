import React from 'react';

const DigitContainer = ({digit, title}) => (
  <div>
    <h2>{title}</h2>
    <div>
      {digit.toString().split('').map((number) => (
        <span>{number}</span>
      ))}
    </div>
  </div>
)

export default DigitContainer;
