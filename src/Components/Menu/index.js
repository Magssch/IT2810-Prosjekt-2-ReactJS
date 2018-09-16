import React, { Component } from 'react'
import './menu.css';

class Menu extends Component {

    render() {
        return (
            <div className={`menu ${this.props.value}`} onClick={this.props.onClick}>
                <div className="bar" id="bar1" />
                <div className="bar" id="bar2" />
                <div className="bar" id="bar3" />
            </div>
        );
    }
}

export default Menu;
