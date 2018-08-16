import React, { Component } from 'react';

class TextBox extends Component {
    constructor() {
        super();
        this.state = { 
            input: ''
         }
    
    }
    //  LOOK FOR CHANGE WHEN CALL
    handleChange(value) {
        this.setState({ input: value });
    }
    render() { 
        console.log(this.state.input);

        return ( 
            <div>
                <h3>Text Box SandBox</h3>
                <input onChange={ (event)  => this.handleChange(event.target.value)} placeholder="Please enter something"></input>
                <span><br/><h3 style={"background-color: black"}>{ this.state.input }</h3></span>

            </div>
            
         );
    }
}
 
export default TextBox;