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
        audioContent: ["",
            "",
            "",
            ""
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
        this.getAudio(flushState);
        this.getText(flushState);
    }

    getAudio(flushState) {

        let path = '/media/sounds/'+this.props.aud.name+'/sound'+this.props.tabIndex+'.mp3';
        console.log(path);
        axios.get(path, {
            responseType: 'arraybuffer'
        })
        .then((response) => {
            this.setState({
                
            })
            console.log(response);
            this.playByteArray(response.data);
                })
        .catch((error) => console.log(error));
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

    update = () => {
        if(this.state.textCatID !== this.props.text.id) {
            this.getMedia(true);
            console.log("Flush state");
        }
        else if(this.state.textContent[this.props.tabIndex-1] == null) {
            this.getMedia(false);
            console.log("GET request");
        }
    }

    
    playByteArray(arrayBuffer) {
        this.source = this.props.audioctx.createBufferSource();
    
        this.props.audioctx.decodeAudioData(arrayBuffer, (buffer) => {
            
            this.source.buffer = buffer;
            this.source.connect(this.props.audioctx.destination);
            this.source.loop = true;
            this.play();
        });
    }
    
    // Play the loaded file
    play() {
        // Create a source node from the buffer
        // Connect to the final output node (the speakers)
        // Play immediately
        this.source.start(0);
    }

    render() {
        this.update();
        return (
            <div>
                <pre className="TextContent">{this.state.textContent[this.props.tabIndex-1]}</pre>
                <audio>play</audio>
            </div>
        );
    }
}

export default Content;
