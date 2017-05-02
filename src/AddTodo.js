import React from 'react';

class AddTodo extends React.Component{
  render(){
    return (
      <div>
        <p>Hello from add-todo!</p>
        <p>Enter your next todo:</p>
        <input type="text" placeholder={this.props.todo} onChange={this.props.handleChange} />
        <input type="button" value='submit' onClick={this.props.postTodo} />
        <p>Current Todo: {this.props.todo}</p>
      </div>
    )
  }
}

export default AddTodo;
