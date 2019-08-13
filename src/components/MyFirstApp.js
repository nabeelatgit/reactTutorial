import React from 'react';
import Header from './Header/Header';
import Todo from './Todo/Todo';
import State from './State/State';
import Starwar from './Starwars/Starwars';
import Form from './Form/Form';

function MyFirstApp() { // These are called functional components. Equivalent 'class' method written below in comments
    return (
        <div>
            <Header />
            <Todo />
            <State />
            <Starwar />
            <Form />
        </div>
    )
}

/*
class MyFirstApp extends React.Component { 'React.Component' is similar to prototype method in JS where the class 'MyFirstApp' will take few properties from it. For eg the 'render' method
    render() { // Here is where all the rendering happens. Everything should be declared within this method
        return (
            <div>
                <Header />
                <Todo />
            </div>
        )
    }
}
*/
export default MyFirstApp;

/*
LifeCycle Hooks

componentDidMount {
    runs once the component is rendered or mounted. You can fetch some data from API for the component if it has any
}

componentWillRecieveProps() {
    runs once any props are fired from the parent component. will be deprecated in React 17.XX
}

shouldComponentUpdate() {
    this runs once react re-renders components. But we can optimize in a way that when react re-renders anything should you want this particular component to upate or not
    It can
    1) return true if you want to update
    2) return false if you dont want to
}

componentWillUnmount() {
    this method runs once you programatically remove the component or when the component disappears from the DOM
}

*/