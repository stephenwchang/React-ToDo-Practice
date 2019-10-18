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
    let currentTodos = this.state.todos;
    let newTodos = currentTodos.push({ key: Math.floor(Math.random() * 10), todos: this.state.userInput, completed:false });
    console.log(currentTodos, newTodos);
    this.setState({ todos: newTodos, userInput: '' })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Todos todos={this.state.todos}/>
        <UserInput input={this.state.userInput} userChangeHandler={this.userChangeHandler} userSubmitHandler={this.userSubmitHandler}/>
      </div>
      

    )
  }
}

export default App;