import React, { Component } from 'react'
import axios from "axios";
import './content.css';


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
        audCatID: 1,
        audioContent: [null,
            null,
            null,
            null,
        ],
        imgCatID: 1,
        imageContent: [null,
            null,
            null,
            null
        ],
    }

    getMedia(flushState) {
        this.getImage();
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
                console.log(error);
            });
    }

    getAudioPath() {
        let path = '/media/sounds/'+this.props.aud.name+'/sound'+this.props.tabIndex+'.mp3';
        return path;
    }

    update = () => {
        if(this.state.textCatID !== this.props.text.id) {
            this.getText(true);
        }
        else if(this.state.textContent[this.props.tabIndex-1] == null) {
            this.getText(false);
        }
    }


    getImage(flushState) {
        let path = '/media/images/'+this.props.img.name+'/'+this.props.img.name+''+this.props.tabIndex+'/'+this.props.img.name+''+this.props.tabIndex+'.svg';
        axios.get(path)
            .then(response => {
                let tmp = this.state.imageContent;
                if(flushState) {
                    tmp = [null, null, null, null];
                }
                tmp[this.props.tabIndex - 1] = response.data;
                //console.log(response.data);
                this.setState({
                    imgCatID: this.props.img.id,
                    imageContent: tmp
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    update = () => {
        if(this.state.textCatID !== this.props.text.id || this.state.imgCatID !== this.props.img.id) {
            this.getMedia(true);
            console.log("Flush state");
        }
        else if(this.state.textContent[this.props.tabIndex-1] == null || this.state.imageContent[this.props.tabIndex-1] == null) {
            this.getMedia(false);
            console.log("GET request");
        }

    }

    render() {
        this.update();
        return (
            <div className="contentContainer">
                <div className="picContainer">
                    <div className="image" dangerouslySetInnerHTML={{ __html: this.state.imageContent[this.props.tabIndex-1] }} />
                </div>
                <div className="textContainer">
                    <pre className="TextContent">{this.state.textContent[this.props.tabIndex-1]}</pre>
                </div>
                <audio src={this.getAudioPath()} autoPlay="true" loop="true"/>
            </div>
        );
    }
}

export default Content;
