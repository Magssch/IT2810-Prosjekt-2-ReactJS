import React, { Component } from 'react';
import './checkbox.css';

class Checkbox extends Component {

    handleChange = () => {
        this.props.handleChange({
            id: this.props.id,
            checked: !this.props.checked
        });
    }

    render() {
        return (
            <label className="container">{this.props.text}
                <input type="radio" name={this.props.category} value={this.props.value} defaultChecked={this.props.checked} onChange={this.handleChange}/>
                <span className="checkmark"/>
            </label>

        );
    }
}

export default Checkbox;
