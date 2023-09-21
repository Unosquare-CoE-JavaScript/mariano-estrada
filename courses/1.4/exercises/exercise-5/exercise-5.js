let getPosts = async (id) => {
  let url = 'https://jsonplaceholder.typicode.com/posts/';

  let fetchData = await fetch(url).then((data) => data.json());

  let filterPosts = await fetchData.filter((post) => post.userId === id);
  console.log(filterPosts);
};

getPosts(1);
