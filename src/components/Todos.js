import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => 
      {
        return <TodoItem note={todo.note} id={todo.key} key={todo.key} userDeleteHandler={this.props.userDeleteHandler}/>
      });
  }
}

export default Todos;