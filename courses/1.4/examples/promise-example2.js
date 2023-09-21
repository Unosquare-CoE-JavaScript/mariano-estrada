const todo = {
  completed: false,
  userId: 1,
  title: 'learn promises',
};

fetch('https://jsonplaceholder.typicode.com/todos/', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(todo),
})
  .then((res) => res.json())
  .then((obj) => console.log(obj));
