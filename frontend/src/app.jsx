import React from 'react';

// Styles
import './theme.scss';
import './app.scss';
import LetterComponent from './components/letterComponent';

const letter = {
  from: 'Yes',
  date: '12/24/2020',
  message:
    'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.',
};

const App = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <LetterComponent letter={letter} />
      </div>
    </div>
  );
};

export default App;
