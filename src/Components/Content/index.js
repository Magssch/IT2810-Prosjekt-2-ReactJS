import React, { Component } from 'react'
import axios from "axios";

class Content extends Component {

    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
        this.getMedia = this.getMedia.bind(this);
    }

    state = {
        textContent: ["Velkommen til vår side :-)",
                       null,
                       null,
                       null
        ],
        audioContent: ["Velkommen til vår side :-)",
            "",
            "",
            ""
        ],
        imageContent: ["Velkommen til vår side :-)",
            "",
            "",
            ""
        ],
    }

    getMedia() {
        // this.getImage();
        //this.getAudio();
        this.getText();
    }

    getText() {
        let path = '/media/text/'+this.props.text.name+'/text'+this.props.tabIndex+'.txt';
        axios.get(path)
            .then(response => {
                let tmp = this.state.textContent;
                tmp[this.props.tabIndex-1] = response.data.text;
                this.setState({textContent: tmp});
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    render() {
        console.log("HAHH");
        if(this.state.textContent[this.props.tabIndex-1] == null) {
            this.getMedia();
        }

        // Når skal textContent oppdateres? Nå oppdateres den kun ved endring i tabIndex

        return (
                <pre className="TextContent">{this.state.textContent[this.props.tabIndex-1]}</pre>
        );
    }
}

export default Content;
