import React, { Component } from 'react';
import './Radio.css';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 1
        };
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
        this.setState({selectedValue: e.target.value});
    }

    render() {
        const radioButtons = this.props.options.map(
            (op) => {
                return(
                    <label class="radioButtons">
                        <input
                            type="radio"
                            name={op.label}
                            value={op.value}
                            checked={this.state.selectedValue == op.value}
                            onChange={this.handleSelection}/>
                        {op.label}
                    </label>
                )});
        return (
            <div>
                <h2>Radio Buttons!</h2>
                <p>You have selected</p>
                <p>Value: {this.state.selectedValue}</p>
                <br/>
                {radioButtons}
            </div>
        );
    }
}

export default Radio;
