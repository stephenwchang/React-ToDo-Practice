import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <form onSubmit={this.props.userSubmitHandler}>
        <input 
          value={this.props.input}
          onChange={this.props.userChangeHandler}
        >
        </input>
        <button>Submit</button>
      </form>
    );
  }
}

export default UserInput;