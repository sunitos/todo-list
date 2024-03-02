import React, { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {
  handleDelete = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };



  render() {
    const { title, done, onImportant, onDone, id, imp } = this.props;


    let clazz = ''
    if (imp) {
      clazz += ' imp'
    }

    if (done) {
      clazz += ' done'
    }


    return (
      <span className='d-flex align-items-center'>
        <span className={`flex-grow-1 ${clazz}`}>{title}</span>
        <button className="btn btn-outline-danger" onClick={this.handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
        <button className='btn btn-outline-warning' onClick={() => onImportant(id)}>
          <i className="bi bi-person-exclamation"></i>
        </button>
        <button className='btn btn-outline-warning' onClick={() => onDone(id)}>
          <i className="bi bi-check-square"></i>
        </button>

      </span>
    );
  }
}
