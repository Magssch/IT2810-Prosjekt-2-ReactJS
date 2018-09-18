import React, { Component } from 'react'
import './category.css';
import Checkbox from './Checkbox';

class Category extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checkbox) {
        this.props.handleChange({
            id: this.props.id,
            option: checkbox
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                    {
                        this.props.options.map(option => {
                                return <Checkbox key={option.id} id={option.id} text={option.text} category={this.props.name}
                                          value={option.name} checked={option.checked} handleChange={this.handleChange}/>
                        }
                    )}
            </div>
        );
    }
}

export default Category;
