import React, { Component } from 'react';
import './App.css';
import Radio from './Radio';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { label: 'Label 1', value: 1 },
                { label: 'Label 2', value: 2 },
                { label: 'Label 3', value: 3 },
                { label: 'Label 4', value: 4 }
            ]
        };
    }

  render() {
      return (
        <div className="App">
          <br/>
            <button className="checkout-btn">
              <div className="checkout-text-wrapper">
                    <div className="circle"/>
                checkout
                    <div className="circle"/>
              </div>
            </button>
              <Radio options={this.state.options}/>
        </div>
    );
  }
}

export default App;
