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

const Client = { getTodos, postTodo };

export default Client;
