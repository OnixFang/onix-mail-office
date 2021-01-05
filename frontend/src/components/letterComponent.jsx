import React from 'react';
import './letterComponent.scss';

const LetterComponent = (props) => {
  const { from, date, message } = props.letter;

  return (
    <div className="letter-container">
      <div className="letter-edge">&nbsp;</div>
      <div className="letter">
        <p className="date">{date}</p>
        <p className="letter-content">{message}</p>
        <p className="signature">from, {from}</p>
      </div>
    </div>
  );
};

export default LetterComponent;
