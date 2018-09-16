import React, { Component } from 'react'
import './checkbox.css';

class Checkbox extends Component {

    state = {
        checked: this.props.checked,
    }

    handleChange = () => {
        this.setState({
            checked: !this.state.checked,
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
