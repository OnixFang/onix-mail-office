import React from 'react';

// Styles
import './theme.scss';
import './app.scss';

const App = (props) => {
  return (
    <div className="row">
      <div className="col s12 m4 push-m4">
        <div className="letter-container">
          <div className="letter">
            I am a very simple card. I am good at containing small bits of information. I am convenient because I
            require little markup to use effectively. I am similar to what is called a panel in other frameworks.
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
