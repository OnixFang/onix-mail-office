import React from 'react';

// Styles
import './theme.scss';
import './app.scss';

const App = (props) => {
  return (
    <React.Fragment>
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>This is the app!</h1>
    </React.Fragment>
  );
};

export default App;
