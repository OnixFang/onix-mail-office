import React from 'react';

// Styles
import './theme.scss';
import './app.scss';

const App = (props) => {
  return (
    <div className="letter-container">
      <div className="letter-edge">&nbsp;</div>
      <div className="letter">
        <p>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require
          little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </p>
      </div>
    </div>
  );
};

export default App;
