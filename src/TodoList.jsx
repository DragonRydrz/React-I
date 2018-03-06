import React from 'react';
import Todo from './Todo';

const TodoList = () => (
  <div>
    <h1> ToDo List </h1>
    <Todo />
    <div onClick={toggleStrikeout()}>content here</div>
  </div>
  )

  

export default TodoList;