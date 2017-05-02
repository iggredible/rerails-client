import React from 'react';
import Client from './Client';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Grid, Row, Col } from 'react-bootstrap';

class Todos extends React.Component{
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: 'Enter your next todo'
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
      <Grid>
        <Row className="show-grid">
          <Col lg={4} md={6} xs={12}>
            <h1>Your Todos</h1>

            <AddTodo todo={this.state.todo} handleChange={this.handleChange} postTodo={this.postTodo}/>

            <br />

            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Todos;
