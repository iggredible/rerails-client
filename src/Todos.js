import React from 'react';
import Client from './Client';

class Todos extends React.Component{
  state = {
    todoList: [],
    awesome: "Awesome!"
  };
  handleDisplay(){
    Client.search((todos) => {
      this.setState({
        todoList: todos
      })
    });
  };

  handleGetJson(){
    fetch('api/todos/1', {
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }

      })
      .then((response) => response.json())
      .then((messages) => {console.log("messages");});
  };

  componentWillMount(){
    this.handleDisplay();
  }
  render(){
    console.log(this.state.todoList);
    return (
      <div>
        <p>Hello from todos!</p>
        <p>{this.state.todoList.description}</p>
      </div>
    )
  }
}

export default Todos;
