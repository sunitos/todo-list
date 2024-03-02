import React, { Component } from 'react';
import TodoListItem from "../todoListItem/TodoListItem";

export default class TodoList extends Component {
    handleDelete = (id) => {
        this.props.onDelete(id);    
    };

    importantTodo = (id) => {
        this.props.onImportant(id);
    };


    
    render() {
        const { todoItems, onDone } = this.props;

        if (todoItems.length === 0) {
            return <p>'nichego'</p>;
        }


        return (
            <ul className='list-group'>
                {todoItems.map(item => (
                    <li key={item.id} className='list-group-item'>
                        <TodoListItem
                        imp={item.important}
                        done={item.done}
                            title={item.title}
                            id={item.id}
                            onDone={onDone}
                            onDelete={this.handleDelete}
                            onImportant={this.importantTodo}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}
