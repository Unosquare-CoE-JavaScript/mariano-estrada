var MAINAPP = (function (nsp) {
  "use strict";
  const url = "https://jsonplaceholder.typicode.com/";

  (async function(){
    let data = await fetch(url + 'posts/')
    let posts = await data.json()
    
    nsp.posts = posts
  
  })()

  //public
  return nsp;
})(MAINAPP || {});


