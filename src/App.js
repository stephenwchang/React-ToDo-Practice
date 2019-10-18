import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import UserInput from './components/UserInput';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          key: 1,
          note: 'hello',
          completed: false
        },
        {
          key: 2,
          note: 'this is a todo',
          completed: false
        }
      ],

      userInput: ''
    }
  }

  userChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  userSubmitHandler = (event) => {
    event.preventDefault();
    let currentTodos = this.state.todos;
    let newTodos = currentTodos.push({ key: Math.random() * 10, todos: this.state.userInput, completed:false });
    console.log(currentTodos, newTodos);
    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        {this.state.todos.map((todo) => { return <TodoItem key={todo.key} note={todo.note} completed={todo.completed}/> })}
        <UserInput input={this.state.userInput} userChangeHandler={this.userChangeHandler} userSubmitHandler={this.userSubmitHandler}/>
      </div>
      

    )
  }
}

export default App;