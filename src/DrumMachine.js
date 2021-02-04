import React, { Component } from 'react'

export default class DrumMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyCode: '',
            keyTrigger: '',
            id: '',
            link: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleClick(event){
        console.log(event.target.id)
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log("enter press here!")
        }
        this.setState({
            keyTrigger: event.keyCode
        })
        {console.log("hi")}
    }
    render() {
        return (
            <div id="drum-machine">
                <div id="display">
                    <button onClick={(event) => this.handleClick(event)} onKeyPress={this.handleKeyPress} className="drum-pad" id="drum-pad-Q">Q
                        {/*<audio className="clip" id="Q" src="http://dev.interactive-creation-works.net/1/1.ogg"></audio>
                        */}
                    </button>
                    <button className="drum-pad" id="drum-pad-W">W</button>
                </div>
            </div>
        )
    }
}
