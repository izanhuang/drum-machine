import React, { Component } from 'react'

export default class SoundKey extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const soundToPlay = document.getElementById(this.props.link)
        soundToPlay.load();
        soundToPlay.play()
        this.setState({
            clicked: true
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={event => this.handleClick(event)}>
                    {this.props.keyCharacter}
                    <audio className="audio-element" id={this.props.link}>
                        <source src={this.props.link}></source>
                    </audio>
                </button>
            </div>
        )
    }
}
