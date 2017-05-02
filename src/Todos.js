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
    this.deleteTodo = this.deleteTodo.bind(this);
  };
  handleChange(e){
    this.setState({todo: e.target.value})
  };
  getTodos(){
    Client.getTodos((todos) => {
      this.setState({todos})
    }, () => console.log(this.state.todos));
  };
  postTodo(e){
    let todo = this.state.todo;
    Client.postTodo(todo, (todo) => {
      this.setState({todos: this.state.todos.concat([todo])})
    });
    console.log(this.state.todos);
  };
  deleteTodo(todo){
    Client.deleteTodo(todo, () => {
      this.getTodos();
    });
  };
  componentDidMount(){
    this.getTodos();
  };

  render(){
    console.log("rendered");
    return (
      <div>
        <p>Hello from todos!</p>
        <ul>
          {this.state.todos.map((todo, index) =>
            <li key={index}>{todo.description} <a href="#" onClick={() => this.deleteTodo(todo.id)}>x</a></li>
          )}
        </ul>

        <AddTodo todo={this.state.todo}
          handleChange={this.handleChange}
          postTodo={this.postTodo}
        />

      <input type="button" value="Delete" onClick={this.deleteTodo} />
      </div>
    )
  }
}

export default Todos;
