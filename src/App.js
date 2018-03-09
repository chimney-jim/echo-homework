import React, { Component } from 'react';
import './App.css';
import Radio from './Radio';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.state = {
            selectedValue: 1,
            options: [
                { label: 'Label 1', value: 1 },
                { label: 'Label 2', value: 2 },
                { label: 'Label 3', value: 3 },
                { label: 'Label 4', value: 4 }
            ]
        };
    }

    handleSelection(value) {
        this.setState({selectedValue: value});
    }

  render() {
      const selectedValue = this.state.selectedValue;
      const options = this.state.options;
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
            <h2>Radio Buttons!</h2>
            <p>You have selected</p>
            <p>Value: {selectedValue}</p>
              <Radio selectedValue={selectedValue}
                     options={options}
                     onSelectedValueChange={this.handleSelection}/>
        </div>
    );
  }
}

export default App;
