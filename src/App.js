import React, { Component } from 'react';
import UserInput from './components/UserInput';
import Todos from './components/Todos';

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
    let newTodos = [...this.state.todos, { key: Math.random() * 10, note: this.state.userInput, completed:false }];
    this.setState({ todos: newTodos, userInput: '' })
  }

  userDeleteHandler = (event) => {
    let id = parseInt(event.target.id);
    let newTodos = this.state.todos.filter((todo) => { return todo.key !== id; }); 
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} userDeleteHandler={this.userDeleteHandler}/>
        <UserInput input={this.state.userInput} userChangeHandler={this.userChangeHandler} userSubmitHandler={this.userSubmitHandler}/>
      </div>
      

    )
  }
}

export default App;