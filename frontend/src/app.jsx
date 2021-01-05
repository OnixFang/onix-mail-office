// Modules
import { Component } from 'react';
import axios from 'axios';
import './materialize-src/js/bin/materialize';

// Styles
import './app.scss';

// Components
import LetterComponent from './components/letterComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passcode: '',
      errorMessage: '',
      apiUrl: process.env.NODE_ENV === 'development' ? 'http://onixmailoffice:8091/letter' : '/letter',
      letter: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(this.state.apiUrl, { params: { passcode: this.state.passcode } })
      .then((response) => {
        const letter = response.data;
        letter.date = new Intl.DateTimeFormat('en-US').format(Date.parse(letter.date));
        this.setState({ letter: letter });

        const elem = document.getElementById('letter-modal');
        M.Modal.getInstance(elem).open();
      })
      .catch((error) => {
        if (error.response) {
          this.setState({ errorMessage: error.response.data });

          const elem = document.getElementById('error-modal');
          M.Modal.getInstance(elem).open();
          console.log(error.response);
        } else {
          this.setState({ errorMessage: 'An error occurred processing your letter.' });
          console.log(error);
        }
      });
  };

  handleInputChange = (event) => {
    this.setState({ passcode: event.target.value });
  };

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <form onSubmit={this.handleSubmit} className="card grey darken-2 col s12 m6 push-m3">
            <div className="card-content white-text">
              <span className="card-title">Onix Mail Office</span>
              <p>Enter your mail's passcode below:</p>
              <div className="row">
                <div className="input-field col s12 white-text">
                  <input id="passcode" type="text" className="white-text" onChange={this.handleInputChange} />
                  <label htmlFor="passcode">Passcode</label>
                </div>
              </div>
              <div className="row">
                <div className="col right">
                  <button type="submit" className="waves-effect waves-light btn">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* ----------------- Letter modal ----------------- */}
        <div id="letter-modal" className="modal grey darken-3">
          <div className="modal-content">
            <h4 className="white-text">Modal Header</h4>
            <LetterComponent letter={this.state.letter} />
          </div>
          <div className="modal-footer grey darken-2">
            <a href="#!" className="modal-close waves-effect waves-green btn">
              Close
            </a>
          </div>
        </div>

        {/* ------------------ Error modal ----------------- */}
        <div id="error-modal" className="modal grey darken-3">
          <div className="modal-content">
            <h4 className="white-text">Error</h4>
            <p>{this.state.errorMessage}</p>
          </div>
          <div className="modal-footer grey darken-2">
            <a href="#!" className="modal-close waves-effect waves-green btn">
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
