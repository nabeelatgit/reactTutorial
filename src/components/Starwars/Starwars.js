import React from 'react';

class Starwars extends React.Component {

    constructor() {
        super();
        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/1')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Star Wars character</h1>
                <p>{ this.state.character.name }</p>
            </div>
        )
    }
}

export default Starwars;