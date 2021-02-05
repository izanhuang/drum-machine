import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class SoundKey extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const soundToPlay = document.getElementById(this.props.link)
        soundToPlay.load();
        soundToPlay.play();
        this.props.onChange(this.props.name);
    }
    
    render() {
        return (
            <div className="button-div">
                <Button onClick={event => this.handleClick(event)}>
                    {this.props.keyCharacter}
                    <audio className="clip" id={this.props.link}>
                        <source src={this.props.link}></source>
                    </audio>
                </Button>
            </div>
        )
    }
}
