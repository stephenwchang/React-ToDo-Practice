import React,{ Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.note}
        <button onClick={this.props.userDeleteHandler} id={this.props.id}>Delete</button>
      </div>
    );
  }
}
export default TodoItem;