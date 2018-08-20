import React, { Component } from 'react';

class FilterBox extends Component {
    constructor() {
        super();
        this.state = { 
            Array: ["code", "web dev", "front end dev", "backend dev", "full stack dev", "non dev"],
            filterString: ""
         }
         this.handleChange = this.handleChange.bind(this);
    }

    handleChange(filter) {
        this.setState({ filterString: filter });
        // console.log(this.state.Array);
    }

    render() { 
        let joblistDisplay = this.state.Array.filter((elem, index) => {
            console.log(elem, index);
            return elem.includes(this.state.filterString);
            // this.state.filterString);
        }).map((elem, index) => {
            console.log(elem, index)
            return <h2 key={ index }> {elem} </h2>
        })
        
        
        console.log(joblistDisplay);

        return ( 
            <div>
                <h3>Seach Box</h3>
                <input onChange={(e) => this.handleChange(e.target.value)} 
                        placeholder="Enter a letters" 
                        type="text">
                </input>
                <span><br/>{ joblistDisplay }</span>

            </div>
         );
    }
}
 
export default FilterBox;