import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

class AddTodo extends React.Component{
  render(){
    return (
      <div>
        <FormControl type="text" placeholder={this.props.todo} onChange={this.props.handleChange} />
        <br />
        <Button bsStyle="info" onClick={this.props.postTodo}>Submit</Button>
      </div>
    )
  }
}

export default AddTodo;
