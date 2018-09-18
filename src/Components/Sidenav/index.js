import React, { Component } from 'react'
import './sidenav.css';
import Category from './Category';

class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(category) { this.props.handleChange(category); }

    render() {
        return (
            <div className={`sidenav ${this.props.value}`}>
                {
                    this.props.categories.map(category =>
                        <Category key={category.id} id={category.id} name={category.name} options={category.options} handleChange={this.handleChange}/>
                    )
                }
            </div>
        );
    }
}

export default Sidenav;
