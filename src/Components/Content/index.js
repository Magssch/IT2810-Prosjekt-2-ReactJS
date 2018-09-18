import React, { Component } from 'react'

class Content extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    setText(newText) {
        this.setState({text: newText});
    }
*/
    render() {
        return (
                <p className="TextContent">{this.props.text}</p>
        );
    }
}

export default Content;
