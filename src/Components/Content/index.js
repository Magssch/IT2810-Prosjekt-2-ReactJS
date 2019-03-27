import React, { Component } from 'react'
import axios from "axios";
import './content.css';


class Content extends Component {
    source;

    constructor(props) {
        super(props);
        this.getText = this.getText.bind(this);
        this.getMedia = this.getMedia.bind(this);
    }
    // Lagrer media-innholdet i state
    state = {
        textCatID: 1,
        textContent: [null,
                       null,
                       null,
                       null
        ],
        audCatID: 1,
        imgCatID: 1,
        imageContent: [null,
            null,
            null,
            null
        ],
    };

    getMedia(flushState) {
        this.getImage();
        this.getText(flushState);
    }

    // Henter ut tekst via AJAX
    getText(flushState) {
        let path = './media/text/'+this.props.text.name+'/text'+this.props.tabIndex+'.txt';
        axios.get(path)
            .then(response => {

                // Lagrer state midlertidig for å unngå å sette state samtidig som man henter den ut
                let temporaryState = this.state.textContent;
                if(flushState) {
                    temporaryState = [null, null, null, null];
                }
                temporaryState[this.props.tabIndex - 1] = response.data.text;
                this.setState({
                    textCatID: this.props.text.id,
                    textContent: temporaryState
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    getAudioPath() {
        return './media/sounds/'+this.props.aud.name+'/sound'+this.props.tabIndex+'.mp3';
    }

    // Henter ut bilder via AJAX
    getImage(flushState) {
        let path = './media/images/'+this.props.img.name+'/'+this.props.img.name+''+this.props.tabIndex+'/'+this.props.img.name+''+this.props.tabIndex+'.svg';
        axios.get(path)
            .then(response => {

                // Lagrer state midlertidig for å unngå å sette state samtidig som man henter den ut
                let tmp = this.state.imageContent;
                if(flushState) {
                    tmp = [null, null, null, null];
                }
                tmp[this.props.tabIndex - 1] = response.data;
                this.setState({
                    imgCatID: this.props.img.id,
                    imageContent: tmp
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    // Hvis kategorier er endret skal state til det mediet nullstilles i tillegg til å hente ut via ajax,
    // hvis ikke skal man bare hente ajax.
    update = () => {
        if(this.state.textCatID !== this.props.text.id || this.state.imgCatID !== this.props.img.id) {
            this.getMedia(true);
        }
        else if(this.state.textContent[this.props.tabIndex-1] == null || this.state.imageContent[this.props.tabIndex-1] == null) {
            this.getMedia(false);
        }

    }

    
    render() {
        this.update();
        return (
            <div className="contentContainer">
                <div className="picContainer">
                    <div className="image" dangerouslySetInnerHTML={{ __html: this.state.imageContent[this.props.tabIndex-1] }} />
                    <audio className="audio" controls src={this.getAudioPath()} autoPlay="false" loop="true"/>
                </div>
                <div className="textContainer">
                    <pre className="TextContent">
                        <blockquote>
                            {this.state.textContent[this.props.tabIndex-1]}
                        </blockquote>
                    </pre>
                </div>
               </div>
        );
    }
}

export default Content;
