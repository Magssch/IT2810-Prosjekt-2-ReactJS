import React, { Component } from 'react'
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="bar" id="bar1" />
                <div className="bar" id="bar2" />
                <div className="bar" id="bar3" />
            </div>
        );
    }
}

export default Menu;
