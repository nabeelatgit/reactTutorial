import React from 'react';
import './Todo.css';
import TodoItem from './TodoItem/TodoItem';
import todosData from './TodoItem/TodosData';

/*
function Todo() {
    const todoItems = todosData.map(item => <TodoItem item={ item.text } key={ item.id } done={ item.completed }/>)
    return (
        <div className="todo-list">
            { todoItems }
        </div>
    )
}
*/

class Todo extends React.Component {

    constructor() {
        super();
        this.state = { 
            todoItems : todosData
        }
        this.handleChange = this.handleChange.bind(this); // this is for letting the constructor know that the function 'handleChange()' is bound to this constructor. Hence the bind() method. Now you can avoid this by introducing arrow functions in the methods.
    }

    handleChange(id) { // any method can be declared between render() and constructor() built in methods. But need to bind in as shown in line 24. If you declared this function as arrow function like ( handleChange = (id) => {} ) you no more need to bind this within constructor becasue the 'this' keyword in arrow function will automatically target the class method which is also called as 'lexical this'.
        this.setState(prevState => { //this.setState is a goodie provided by React.Component. 'prevState' refers to the current 'this.state', for updating purposes. Cannot do this.state.todoItems = "newItems".
            const updatedTodos = prevState.todoItems.map(item => {
                if(item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todoItems.map(item => <TodoItem item={ item } key={ item.id } completed={ item.completed } handleChange={ this.handleChange }/>)
        return (
            <div className="todo-list">
                { todoItems }
            </div>
        )
    }
}
export default Todo;