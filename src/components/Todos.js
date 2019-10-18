import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => 
      {
        return <TodoItem note={todo.note} key={todo.key}/>
      });
  }
}

export default Todos;