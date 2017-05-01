import React from 'react';
import Client from './Client';

class Todos extends React.Component{
  constructor() {
    super();
    this.state = {
      todos: [],
      awesome: "Awesome!"
    };
  }
  handleDisplay(){
    Client.search((todos) => {
      this.setState({
        todos: todos
      })
    });
  };

  componentWillMount(){
    this.handleDisplay();
  };

  render(){
    console.log("todoList: ", this.state.todos);
    return (
      <div>
        <p>Hello from todos!</p>
        <ul>
          {this.state.todos.map((t, index) =>
            <li key={index}>{t.description}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Todos;
