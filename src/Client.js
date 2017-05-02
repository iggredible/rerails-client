function getTodos(cb) {
  return fetch(`api/todos`,  {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    .then((response) => response.json())
    .then(cb);
};

function postTodo(todo, cb){
  return fetch(`api/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description: todo
    })
  }).then(cb);
};

function deleteTodo(todoId){
  return fetch(`api/todos/${todoId}`, {
    method: 'DELETE'
  }).then(() => console.log('deleted'))
}

const Client = { getTodos, postTodo, deleteTodo };

export default Client;
