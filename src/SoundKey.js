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
        const soundToPlay = document.getElementById(this.props.keyCharacter)
        soundToPlay.play();
        this.props.onChange(this.props.name);
    }
    
    render() {
        return (
            <div className="button-div">
                <Button className="drum-pad" id={this.props.id} onClick={event => this.handleClick(event)} size="lg">
                    {this.props.keyCharacter}
                    <audio className="clip" id={this.props.keyCharacter} src={this.props.link}>
                    
                    </audio>
                </Button>
            </div>
        )
    }
}
