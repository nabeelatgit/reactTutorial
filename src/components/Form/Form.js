import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // const { name, value } = event.target;  This is in reference to React's synthetic events. 
        this.setState({
            [event.target.name]: event.target.value // the reason behind the [] for event.target.name is that here 'name' is a string which the states of React doesn't recognize. Hence the [] will allow it to understand it is an object when enclosed in one. The 'name' here is mapped to name attribute in input element which has the same name as of states.
            // [name]: value what if the number of forms increases. So this approach could save time.
        })
    }

    render() {
        return (
            <div>
                <input type="text" 
                       value={ this.state.firstName } // binding the state value to the input value attribute makes this a controlled form. 
                       placeholder="First Name" 
                       name="firstName" 
                       onChange={ this.handleChange } 
                /> 
                <br />
                <input type="text" 
                       value={ this.state.lastName } 
                       placeholder="Last Name" 
                       name="lastName" 
                       onChange={ this.handleChange }
                /> 
                <p> Hello, { this.state.firstName }  { this.state.lastName }</p>
            </div>
        )
    }
}

export default Form;