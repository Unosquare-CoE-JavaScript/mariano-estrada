const todo = {
  completed: false,
  userId: 1,
  title: 'learn promises',
};

let postTodo = async (todo) => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

postTodo(todo);
