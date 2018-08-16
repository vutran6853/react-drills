import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {
    constructor() {
        super();
        this.state = { 
            username: '',
            password: ''
         }
         this.assignAccount = this.assignAccount.bind( this );
    }
    handleUsername(name) {
        this.setState({ username: name });
    }
    handlePassword(pass) {
        this.setState({ password: pass });
    }
    assignAccount() {
       alert(`UserName: ${this.state.username}   Password: ${this.state.password} `);
    }

    render() {
        return ( 
            <div>
                <h3>Login Page </h3>
                <input onChange={ (e) => this.handleUsername(e.target.value) } placeholder="Enter usename"></input>
                <input onChange={ (e) => this.handlePassword(e.target.value) } placeholder="Enter password"></input>
                <Button bsStyle="success" onClick={ this.assignAccount } >Submit</Button>
                
            </div>
         );
    }
}
 
export default Login;