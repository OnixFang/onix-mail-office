import React from 'react';

// Styles
import './theme.scss';
import './app.scss';
import LetterComponent from './components/letterComponent';

const App = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <LetterComponent />
      </div>
    </div>
  );
};

export default App;
