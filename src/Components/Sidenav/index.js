import React, { Component } from 'react'
import './sidenav.css';

class Sidenav extends Component {

    render() {
        return (
            <div className={`sidenav ${this.props.value}`}>
                <a href="#">TEST</a>
            </div>
        );
    }
}

export default Sidenav;
