import React, { Component } from 'react';
import AppHeader from './Components/appHeader/AppHeader';
import SearchTodo from './Components/searchTodo/SearchTodo';
import TodoAdd from './Components/todoAdd/TodoAdd';
import TodoList from './Components/todoList/TodoList';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { id: 1, title: 'учить англ', important: false, done: false },
        { id: 2, title: 'пойти на курсы', important: false, done: false },
        { id: 3, title: 'купить книгу', important: false, done: false },
      ],
      filter: 'all',
      searchText: '',
    };
  }

  handleFilterAll = () => {
    this.setState({ filter: 'all' });
  };

  handleFilterDone = () => {
    this.setState({ filter: 'done' });
  };

  handleFilterActive = () => {
    this.setState({ filter: 'active' });
  };

  handleDelete = (id) => {
    const updatedTodoItems = this.state.todoItems.filter(item => item.id !== id);
    this.setState({ todoItems: updatedTodoItems });
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  addTodo = (text) => {
    const ids = this.state.todoItems.map((el) => el.id);
    const newTodo = {
      title: text,
      done: false,
      important: false,
      id: ids.slice(-1)[0] + 1,
    };
    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
  };

  importantTodo = (id) => {
    const updatedTodoItems = this.state.todoItems.map(item =>
      item.id === id ? { ...item, important: !item.important } : item
    );
    this.setState({ todoItems: updatedTodoItems });
  };

  doneTodo = (id) => {
    const updatedTodoItems = this.state.todoItems.map(item =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    this.setState({ todoItems: updatedTodoItems });
  };

  render() {
    const { todoItems, filter } = this.state;
    let filterItems = todoItems;

    if (filter === 'active') {
      filterItems = todoItems.filter(item => !item.done);
    } else if (filter === 'done') {
      filterItems = todoItems.filter(item => item.done);
    };

// нипанятна блен--------------------------------------------------------------------

if (this.state.searchText) {
  filterItems = filterItems.filter(item =>
    item.title.toLowerCase().includes(this.state.searchText.toLowerCase())
  );
}

    const done = todoItems.filter((item) => item.done).length;
    const active = todoItems.length - done;

    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <AppHeader done={done} active={active} />
        <SearchTodo
          handleFilterAll={this.handleFilterAll}
          handleFilterActive={this.handleFilterActive}
          handleFilterDone={this.handleFilterDone}
          handleSearch={this.handleSearch}
        />
        <TodoAdd onAddTodo={this.addTodo} />
        <TodoList
          todoItems={filterItems}
          onDelete={this.handleDelete}
          onImportant={this.importantTodo}
          onDone={this.doneTodo}
        />
      </div>
    );
  }
}
