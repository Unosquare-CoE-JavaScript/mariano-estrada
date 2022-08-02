var MAINAPP = (function (nsp) {
    "use strict";
    const url = "https://jsonplaceholder.typicode.com/";
    let posts = [],
      comments = [],
      todos = [];
  
    let promise1 = fetch(url + 'posts/')
    .then(resp1 => resp1.json())
  
    let promise2 = fetch(url + 'comments/')
    .then(resp1 => resp1.json())
  
    let promise3 = fetch(url + 'todos/')
    .then(resp1 => resp1.json())

    Promise.all([promise1, promise2, promise3])
    .then(msg => console.log(msg))
  
    //public
    return nsp;
  })(MAINAPP || {});