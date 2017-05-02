import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class TodoList extends React.Component{
  render(){
    return (
      <div>
        <ListGroup>
          {this.props.todos.map((todo, index) =>
            <ListGroupItem href="#" key={index} onClick={() => this.props.deleteTodo(todo.id)}>{todo.description}</ListGroupItem>
          )}
        </ListGroup>
      </div>
    )
  }
}


export default TodoList;
