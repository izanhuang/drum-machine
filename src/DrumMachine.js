import React, { Component } from 'react'
import SoundKey from './SoundKey';

const sounds = {
    'Q':"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", 
    'W':"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    'E':"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    'A':"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    'S' :"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    'D' :"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    'Z' :"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    'X' :"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    'C' :"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}


export default class DrumMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyCode: '',
            keyTrigger: '',
            id: '',
            link: '',
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        var keyPressed = (String.fromCharCode(event.keyCode))
        var soundLink = sounds[keyPressed]
        if (soundLink !== undefined) {
            var soundToPlay = document.getElementById(soundLink)
            soundToPlay.load()
            soundToPlay.play()
        }
    }
    
    componentDidMount(){
     document.addEventListener("keydown", this.handleKeyPress);
    }

    render() {
        return (
            <div id="drum-machine" onKeyDown={this.handleKeyPress}>
                <div id="display">
                    <SoundKey keyCharacter={"Q"} link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}/>
                    <SoundKey keyCharacter={"W"} link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}/>
                    <SoundKey keyCharacter={"E"} link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}/>
                    <SoundKey keyCharacter={"A"} link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}/>
                    <SoundKey keyCharacter={"S"} link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}/>
                    <SoundKey keyCharacter={"D"} link={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}/>
                    <SoundKey keyCharacter={"Z"} link={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}/>
                    <SoundKey keyCharacter={"X"} link={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}/>
                    <SoundKey keyCharacter={"C"} link={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}/>
                    {/* <button onClick={(event) => this.handleClick(event)} onKeyPress={this.handleKeyPress} className="drum-pad" id="drum-pad-Q">Q
                        <audio className="clip" id="Q" src="http://dev.interactive-creation-works.net/1/1.ogg"></audio>
                    
                    </button>
                    <button className="drum-pad" id="drum-pad-W">W</button> */}
                </div>
            </div>
        )
    }
}
