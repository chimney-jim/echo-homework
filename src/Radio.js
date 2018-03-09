import React, { Component } from 'react';
import './Radio.css';

class Radio extends Component {
    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(e) {
        this.props.onSelectedValueChange(e.target.value);
    }

    render() {
        const selectedValue = this.props.selectedValue;
        const radioButtons = this.props.options.map(
            (op) => {
                return(
                    <label class="radioButtons">
                        <input
                            type="radio"
                            name={op.label}
                            value={op.value}
                            checked={selectedValue == op.value}
                            onChange={this.handleSelection}/>
                        {op.label}
                    </label>
                )});
        return (
            <div>
                {radioButtons}
            </div>
        );
    }
}

export default Radio;
