# Client component of React-Rails Todo App

*If you like it, give this project some love by giving it a star!*

Overall this is a simple todo-app that uses **Rails backend** and **React frontend.** Perfect to learn how to
communicate between two different projects.

This part will cover the Client part. To see the backend/ API part, check out the [ *rerails-API*](https://github.com/IggHub/rerails-api) repo.

## Setting up React project

To create this project, I used [create-react-app](https://github.com/facebookincubator/create-react-app). Once done, `npm run build` to configure build environment. `npm run start` will launch the app at, by default, `localhost:3000`. Before we start, inside `package.json`, add `"proxy": "http://localhost:3001/"`. This will tell our app to "proxy" at localhost:3001 to get our data. We will also configure our Rails API to send data to localhost:3001.

## How to setup React to get data from Rails API Source (works on most API sources)

I will leave out the UI/ Bootstrapping part because that is not crucial to understand the big cheese. The big take-home I want you to have is to be able to connect React and Rails.

To `GET` the API data from todo file, we will use `fetch` method. Checkout fetch API [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

I created a directory to store all fetching that we will do, calling it `Client.js`. Feel free to take a peek at that.

```
function getTodos(cb) {
  return fetch(`api/todos`,  {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }})
    .then((response) => response.json())
    .then(cb);
};
```

The `getTodos` takes one argument, the callback argument. The callback argument will be used to set state `todos`. Check my `Todos.js` for more info. Essentially, when `Client.getTodos()` is run, it will fetch all the data (with promise), gets all the todos data in an array, and once we get them, we will set them to equal our `this.state.todos`. That's it!

Now that `this.state.todos` contain all todos, we can map them and display them as a list. I created a new component called `TodoList.js` to do that. I have something different on my todolist directory, but essentially you just need something like:

```
{this.props.todos.map((todo, index) =>
  <li key={index}>{todo.description}</li>
)}
```

The rest of the requests, `postTodos()` and `deleteTodo` is left as an exercise. They are very similar to `getTodos()`, except they use `POST` and `DELETE` method, respectively. The codes are on this repo. You can find the `postTodo()` in action inside `AddTodo.js` and `deleteTodo` inside `TodoList.js`.

If you have any question, feel free to email me!
