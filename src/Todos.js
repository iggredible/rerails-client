import React from 'react';
import Client from './Client';
import AddTodo from './AddTodo';

class Todos extends React.Component{
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: 'do this!'
    };
    this.handleChange = this.handleChange.bind(this);
    this.postTodo = this.postTodo.bind(this);
  };
  handleChange(e){
    this.setState({todo: e.target.value})
  };
  getTodos(){
    Client.getTodos((todos) => {
      this.setState({todos})
    });
  };
  postTodo(e){
    let todo = this.state.todo;
    Client.postTodo(todo, (todo) => {
      this.setState({todos: this.state.todos.concat([todo])})
    });
  };
  componentDidMount(){this.getTodos()};

  render(){
//    this.getTodos();
    return (
      <div>
        <p>Hello from todos!</p>
        <ul>
          {this.state.todos.map((t, index) =>
            <li key={index}>{t.description}</li>
          )}
        </ul>

        <AddTodo todo={this.state.todo}
          handleChange={this.handleChange}
          postTodo={this.postTodo}
        />
      </div>
    )
  }
}

export default Todos;
