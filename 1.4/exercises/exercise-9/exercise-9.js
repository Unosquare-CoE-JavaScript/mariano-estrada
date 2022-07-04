var MAINAPP = (function (nsp) {
  "use strict";
  const url = "https://jsonplaceholder.typicode.com/";

  (async function(){
    try {
      let data1 = await fetch(url + 'posts/')
      let data2 = await fetch(url + 'comments/')
      let data3 = await fetch(url + 'todos/')

      let results = await Promise.all([data1,data2,data3])
      nsp.posts = await results[0].json()
      nsp.comments = await results[1].json()
      nsp.todos = await results[2].json()

    } catch (error) {
      console.log(error)
    }
  
  })()

  //public
  return nsp;
})(MAINAPP || {});


