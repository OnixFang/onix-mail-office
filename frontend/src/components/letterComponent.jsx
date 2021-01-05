import React from 'react';
import './letterComponent.scss';

const LetterComponent = (props) => {
  return (
    <div className="letter-container">
      <div className="letter-edge">&nbsp;</div>
      <div className="letter">
        <p className="date">12/31/2020</p>
        <p className="letter-content">
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require
          little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </p>
        <p className="signature">from, Yes</p>
      </div>
    </div>
  );
};

export default LetterComponent;
