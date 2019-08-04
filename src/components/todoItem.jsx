import React, { Component } from "react";

class TodoItem extends Component {
 
  render() {
    let Style = this.props.info.completed ? {fontStyle: "italic", color: "#cdcdcd", textDecoration: "line-through"} : {}
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.info.completed}
          onChange={() => this.props.onStateChange(this.props.info.id)}
        />
        <h1 style={Style}>{this.props.info.text} &nbsp; </h1>
      </div>
    );
  }
}

export default TodoItem;
