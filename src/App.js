import React, { Component } from 'react';
import base from './base';
import Todo from './todo';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.rebaseRef = base.syncState('todos', {
      context: this,
      state: 'todos',
      asArray: true
    })
  }

  componentWillUnmount() {
      base.removeBinding(this.rebaseRef)
    }

  addTodo(event) {
    event.preventDefault()
    let todo = {
      value: this.refs.input.value,
      createdAt: moment(Date.now()).format()
    }
    let todos = this.state.todos;
      this.setState({
        todos: todos.concat([todo])
      })
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={() => this.addTodo(event)}>
          <input ref="input" />
          <button type="submit">Submit Todo</button>
        </form>
        {this.state.todos.map(item => {
          return <Todo key={item.key} todo={item.value} />
        })}
      </div>
    );
  }
}

export default App;
