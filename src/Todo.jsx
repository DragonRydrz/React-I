import React, { Component } from 'react';

class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };

  }

  render() {
    return (
      <div>
        ToDo Component
      </div>
    )
  }
}


export default Todo;