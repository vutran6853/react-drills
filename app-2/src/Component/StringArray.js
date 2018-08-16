import React, { Component } from 'react';

class StringArray extends Component {
    constructor() {
        super();
        this.state = { 
            Array: ["C0de", "Web Dev", "Front End Dev", "Backend Dev", "Full Stack Dev", "NoN Dev"]
         }
    
    }
    Array() {
        let newArray = this.state.Array.map(function() {
            
        })
    }
    render() { 
        console.log(this.state.Array);
        
        return ( 
            <div>
                <h3>Display list</h3>
                
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array }</h3> </span>
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array[1] }</h3> </span>
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array[2] }</h3> </span>
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array[3] }</h3> </span>
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array[4] }</h3> </span>
                <span><br/>{ this.Array(Array) } <h3>{ this.state.Array[5] }</h3> </span>

            </div>
         );
    }
}
 
export default StringArray;