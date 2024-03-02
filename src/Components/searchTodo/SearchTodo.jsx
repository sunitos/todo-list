import React, { Component } from 'react';

export default class SearchTodo extends Component {
  state = {
    searchText: ''
  };

  handleSearch = (event) => {
    const searchText = event.target.value;
    this.setState({ searchText });
    this.props.handleSearch(searchText);
  };

  render() {
    return (
      <div className='d-flex'>
        <input
          type="text"
          className='form-control'
          value={this.state.searchText}
          onChange={this.handleSearch}
        />
        <button className='btn btn-info' onClick={this.props.handleFilterAll}>All</button>
        <button className='btn btn-outline-secondary' onClick={this.props.handleFilterActive}>Active</button>
        <button className='btn btn-outline-secondary' onClick={this.props.handleFilterDone}>Done</button>
      </div>
    )
  }
}
