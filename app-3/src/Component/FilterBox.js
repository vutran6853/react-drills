import React, { Component } from 'react';

class FilterBox extends Component {
    constructor() {
        super();
        this.state = { 
            Array: ["C0de", "Web Dev", "Front End Dev", "Backend Dev", "Full Stack Dev", "NoN Dev"],
            input: '',
            filterArray: []
         }
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filter) {
        this.setState({ input: filter });
        console.log(this.state.input);
    }

    render() { 
        let joblistDisplay = this.state.Array.filter(array => this.state.input.length)
        console.log(joblistDisplay);



        return ( 
            <div>
                <h3>Seach Box</h3>
                <input onChange={(e) => this.handleChange(e.target.value)} placeholder="Enter a letters" ></input>
                <span><br/>{ Array }</span>

            </div>
         );
    }
}
 
export default FilterBox;