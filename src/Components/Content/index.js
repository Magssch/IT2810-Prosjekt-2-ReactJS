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
                <pre className="TextContent">{this.props.text}</pre>
        );
    }
}

export default Content;
