import React, { Component } from 'react'
import axios from "axios";


class Content extends Component {
    source;

    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
        this.getMedia = this.getMedia.bind(this);
        //this.flushState = this.flushState.bind(this);
    }

    state = {
        textCatID: 1,
        textContent: [null,
                       null,
                       null,
                       null
        ],
        AudCatID: 1,
        audioContent: [<audio ></audio>,
            null,
            null,
            null
        ],
        ImgCatID: 1,
        imageContent: ["Velkommen til vår side :-)",
            "",
            "",
            ""
        ],
    }

    flushState = () => {
        this.setState({
            textContent: [null,null,null,null],
            imageContent: [null,null,null,null],
            audioContent: [null,null,null,null],
        });
    }

    getMedia(flushState) {
        // this.getImage();
        //this.getAudio(flushState);
        this.getText(flushState);
    }



    getText(flushState) {
        let path = '/media/text/'+this.props.text.name+'/text'+this.props.tabIndex+'.txt';
        axios.get(path)
            .then(response => {
                let tmp = this.state.textContent;
                if(flushState) {
                    tmp = [null, null, null, null];
                }
                tmp[this.props.tabIndex - 1] = response.data.text;
                this.setState({
                    textCatID: this.props.text.id,
                    textContent: tmp
                });
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    getAudioPath() {
        var path = '/media/sounds/'+this.props.aud.name+'/sound'+this.props.tabIndex+'.mp3';
        return path;
    }

    update = () => {
        if(this.state.textCatID !== this.props.text.id) {
            this.getText(true);
            console.log("textlush stat  e");
        }
        else if(this.state.textContent[this.props.tabIndex-1] == null) {
            this.getText(false);
            console.log("GET text request");
        }

    }

    render() {
        this.update();
        return (
            <div>
                <pre className="TextContent">{this.state.textContent[this.props.tabIndex-1]}</pre>
                <audio src={this.getAudioPath()} autoPlay="true" loop="true"></audio>
            </div>
        );
    }
}

export default Content;
