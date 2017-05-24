import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
    
    this.state = {
      hello: true
    }
  }

  handleClick() {
    this.setState({hello: !this.state.hello})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {this.state.hello && <h2>Welcome to React</h2> }
        </div>
        <p className="App-intro">
          <button type="button" onClick={this.handleClick}>Hellor</button>
          To get started, edit <code>src/AppPjs</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
