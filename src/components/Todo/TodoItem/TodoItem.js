import React from 'react';
import './TodoItem.css';

/*
function TodoItem(props) {
   return (
        <div className="todo-item">
            <input type="checkbox" 
                   checked={ props.item.completed }
                   onChange={ () => props.handleChange(props.item.id) } />
            <label>{ props.item.text }</label>
        </div>
   )
}
*/
class TodoItem extends React.Component { // Class based declaration of above function. Here the props are not passed as an argument but instead called as 'this.props'. this.props.done is equivalent to 'props.done' in the functional based component
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={ this.props.item.completed } onChange={ () => this.props.handleChange(this.props.item.id) } /> 
                <label className={ this.props.item.completed? "completed" : " " }>{ this.props.item.text }</label>
            </div>
        )
    }
}
export default TodoItem;