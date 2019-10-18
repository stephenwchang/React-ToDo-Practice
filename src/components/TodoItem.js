import React,{ Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <div>
        {this.props.note}
        <button style={{ margin: "2px 2px" }} onClick={this.props.userDeleteHandler} id={this.props.id}>Delete</button>
      </div>
    );
  }
}
export default TodoItem;