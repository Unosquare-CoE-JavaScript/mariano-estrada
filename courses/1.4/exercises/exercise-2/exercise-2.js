var MAINAPP = (function (nsp) {
  "use strict";
  const url = "https://jsonplaceholder.typicode.com/";
  let posts = [],
    comments = [],
    todos = [];

  fetch(url + 'posts/')
  .then(resp1 => resp1.json())
  .then(posts => nsp.posts = posts)

  fetch(url + 'comments/')
  .then(resp1 => resp1.json())
  .then(comments => nsp.comments = comments)

  fetch(url + 'todos/')
  .then(resp1 => resp1.json())
  .then(todos => nsp.todos = todos)

  //public
  return nsp;
})(MAINAPP || {});
