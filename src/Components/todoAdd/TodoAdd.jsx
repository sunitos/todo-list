import React, { Component } from 'react';

export default class TodoAdd extends Component {
  state = {
    inputText: '',
  };

  setInputText = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.inputText.trim() !== '') {
      this.props.onAddTodo(this.state.inputText);
      this.setState({ inputText: '' });
    }
  };

  render() {
    return (
      <div className="d-flex">
        <input
          value={this.state.inputText}
          onChange={this.setInputText}
          type="text"
          className="form-control"
          placeholder='napishi text'
        />
        <button className="btn btn-info" onClick={this.handleAddTodo}>
          add
        </button>
      </div>
    );
  }
}
