import React, { Component } from 'react'

export default class SoundKey extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        const audioEl = document.getElementById(this.props.link)
        audioEl.load();
        audioEl.play()
    }
    


    render() {
        return (
            <div>
                <button onClick={event => this.handleClick(event)}>{this.props.keyCharacter}
                <audio className="audio-element" id={this.props.link}>
                <source src={this.props.link}></source>
                </audio>
                </button>
            </div>
        )
    }
}
