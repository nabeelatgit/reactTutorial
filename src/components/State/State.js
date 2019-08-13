//Will be created as class based components

import React from 'react';

class State extends React.Component {
    constructor() { // constructor is the function where you intializes the values or states.
        super(); // this method gets all properties from the parent function which here is 'React.Component'. For eg 'this.setState' and such.
        this.state = { // this.state is always an object
            someValue : "someValue",
            isLoggedIn : false
        }
    }

    render() {
        return (
            <div>
                <h1>Stateful Components</h1>
                <p>{ this.state.someValue }</p>
                <div>
                    <h1>The user is logged { this.state.isLoggedIn? "in" : "out" }</h1>
                </div>
            </div>
        )
    }
}

export default State;