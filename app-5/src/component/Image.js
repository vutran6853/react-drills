import React, { Component } from 'react';
import BitCoinImage from './Image';
class Image extends Component {
    constructor() {
        super();
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <h3>IMAGE Component</h3>
                <img src={require('./../Image/bitCoin3.jpg')}/>
            </div>
         );
    }
}
 
export default Image;