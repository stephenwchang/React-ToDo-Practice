import React,{ Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>{this.props.note}</div>
    );
  }
}
export default TodoItem;