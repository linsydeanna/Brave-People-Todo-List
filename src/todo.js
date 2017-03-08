import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        <span>Task: </span>
        <span>{this.props.todo}</span>
      </div>
    )
  }
}

export default Todo
