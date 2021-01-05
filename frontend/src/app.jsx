// Modules
import { Component } from 'react';
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
      letter: {
        from: 'Yes',
        date: '12/24/2020',
        message:
          'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const elem = document.getElementById('letter-modal');
    M.Modal.getInstance(elem).open();
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
      </div>
    );
  }
}

export default App;
