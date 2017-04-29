function search(cb) {
  console.log('running search');
  return fetch(`api/todos/1`,  {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    .then((response) => response.json())
    .then(cb);
}

function parseJSON(response){
  return response.json();
}

const Client = { search };

export default Client;
