import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import SoundKey from './SoundKey';

const sounds = {
    'Q':"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", 
    'W':"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    'E':"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    'A':"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    'S':"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    'D':"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    'Z':"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    'X':"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    'C':"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
}

const soundsName = {
    'Q':'Heater-1',
    'W':'Heater-2',
    'E':"Heater-3",
    'A':"Heater-4",
    'S':"Clap",
    'D':"Open-HH",
    'Z':"Kick-n'-Hat",
    'X':"X",
    'C':"C"
}

export default class DrumMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            clicked: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event){
        var keyPressed = (String.fromCharCode(event.keyCode))
        var soundLink = sounds[keyPressed]
        if (soundLink !== undefined) {
            this.setState({
                name: soundsName[keyPressed]
            })
            var soundToPlay = document.getElementById(soundLink)
            soundToPlay.load()
            soundToPlay.play()
        }
    }

    handleChange = (soundKeyData) => {
        this.setState({name: soundKeyData})
    }

    componentDidMount(){
     document.addEventListener("keydown", this.handleKeyPress);
    }

    render() {
        const {clicked} = this.state;
        return (
            <div id="drum-machine" onKeyDown={this.handleKeyPress}>
                <div id="display">
                    <Container>
                    <Row>
                        <Col>
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-Q"
                                keyCharacter={"Q"} 
                                link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} 
                                name={soundsName['Q']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    
                        <Col>
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-W"
                                keyCharacter={"W"} 
                                link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} 
                                name={soundsName['W']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col>
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-E"
                                keyCharacter={"E"} 
                                link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} 
                                name={soundsName['E']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-A"
                        keyCharacter={"A"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} 
                        name={soundsName['A']} 
                        onChange={this.handleChange}
                    />
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-S"
                        keyCharacter={"S"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} 
                        name={soundsName['S']} 
                        onChange={this.handleChange}
                    />
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-D"
                        keyCharacter={"D"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} 
                        name={soundsName['D']} 
                        onChange={this.handleChange}
                    />
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-Z"
                        keyCharacter={"Z"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} 
                        name={soundsName['Z']} 
                        onChange={this.handleChange}
                    />
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-X"
                        keyCharacter={"X"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} 
                        name={soundsName['X']} 
                        onChange={this.handleChange}
                    />
                    <SoundKey 
                        className="drum-pad"
                        id="drum-pad-C"
                        keyCharacter={"C"} 
                        link={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} 
                        name={soundsName['C']} 
                        onChange={this.handleChange}
                    />
                    </Container>
                    {/* <button onClick={(event) => this.handleClick(event)} onKeyPress={this.handleKeyPress} className="drum-pad" id="drum-pad-Q">Q
                        <audio className="clip" id="Q" src="http://dev.interactive-creation-works.net/1/1.ogg"></audio>
                    
                    </button>
                    <button className="drum-pad" id="drum-pad-W">W</button> */}
                    <div>
                        <p>{this.handleChange && this.state.name}</p>
                    </div>
                </div>
            </div>
        )
    }
}
