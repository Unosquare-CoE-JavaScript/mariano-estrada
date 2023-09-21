const swapi = function (num) {
  let url = 'https://swapi.dev/api/people/';
  fetch(url + num + '/')
    .then(function (data) {
      return data.json();
    })
    .then(function (obj) {
      console.log(obj);
    });
};

swapi(1);

console.log('other actions');

//using arrow functions
let arrowFetch = function (num) {
  const url = 'https://swapi.dev/api/people/';
  fetch(url + num + '/')
    .then((result) => result.json())
    .then((resultJson) => console.log(resultJson));
};

arrowFetch(2);
