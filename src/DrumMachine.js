import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SoundKey from './SoundKey';

const sounds = {
    'Q':"./Heater-1.mp3", 
    'W':"./Heater-2.mp3",
    'E':"./Heater-3.mp3",
    'A':"./Heater-4_1.mp3",
    'S':"./Heater-6.mp3",
    'D':"./Dsc_Oh.mp3",
    'Z':"./Kick_n_Hat.mp3",
    'X':"./RP4_KICK_1.mp3",
    'C':"./Cev_H2.mp3"
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
            var soundToPlay = document.getElementById(keyPressed)
            soundToPlay.currentTime = 0;
            soundToPlay.play()
        }
        event.preventDefault();
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
                <div id="drum-machine-display">
                    <Container>
                    <Row>
                        <Col>
                    <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-Q"
                                keyCharacter="Q"
                                link="./Heater-1.mp3"
                                name={soundsName['Q']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-W"
                                keyCharacter="W"
                                link="./Heater-2.mp3"
                                name={soundsName['W']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-E"
                                keyCharacter="E"
                                link="./Heater-3.mp3"
                                name={soundsName['E']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-A"
                                keyCharacter="A"
                                link="./Heater-4_1.mp3"
                                name={soundsName['A']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-S"
                                keyCharacter="S"
                                link="./Heater-6.mp3"
                                name={soundsName['S']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-D"
                                keyCharacter="D"
                                link="./Dsc_Oh.mp3"
                                name={soundsName['D']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-Z"
                                keyCharacter="Z"
                                link="./Kick_n_Hat.mp3"
                                name={soundsName['Z']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-X"
                                keyCharacter="X"
                                link="./RP4_KICK_1.mp3"
                                name={soundsName['X']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col md="auto">
                            <SoundKey 
                                className="drum-pad"
                                id="drum-pad-C"
                                keyCharacter="C"
                                link="./Cev_H2.mp3"
                                name={soundsName['C']} 
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    </Container>
                    </Col>
                    {/* <button onClick={(event) => this.handleClick(event)} onKeyPress={this.handleKeyPress} className="drum-pad" id="drum-pad-Q">Q
                        <audio className="clip" id="Q" src="http://dev.interactive-creation-works.net/1/1.ogg"></audio>
                    
                    </button>
                    <button className="drum-pad" id="drum-pad-W">W</button> */}
                    <Col>
                        <div id="soundName">
                        <p id="display">{this.handleChange && this.state.name}</p>
                        </div>
                    </Col>
                    </Row>
                    </Container>
                </div>
                
            </div>
        )
    }
}
