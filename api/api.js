const baseUrl = "https://jsonplaceholder.typicode.com/";
const reqresUrl = "https://reqres.in/api/";

export async function getPosts() {
  const res = await fetch(baseUrl + "posts/");
  const data = res.json();
  return data;
}

export async function getPostById(id) {
  const res = await fetch(baseUrl + `posts/${id}/`);
  const data = res.json();
  return data;
}

export async function getPostComments(postId) {
  const res = await fetch(baseUrl + `posts/${postId}/comments`);
  const data = res.json();
  return data;
}

export async function addNewComment({ postId, newComment }) {
  const res = await fetch(baseUrl + `posts/${postId}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId: postId,
      email: "asda",
      id: "3233",
      name: "asda",
      body: newComment,
    }),
  });
  const data = res.json();
  return data;
}


export async function getUsers(page) {
  const res = await fetch(reqresUrl + `users?page=${page}`);
  // const res = await fetch(reqresUrl + `users?page=${page}`);
  const data = res.json();
  return data;
}

export async function registerNewUser(email, password) {
  console.log(email, password, 'да бля');
  const res = await fetch(reqresUrl + `register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "pistol"
    }),
  });
  const data = res.json();
  return data;
}

export async function loginUser(email, password) {
  console.log(email, password, 'да бля');
  const res = await fetch(reqresUrl + `login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "pistol"
    }),
  });
  const data = res.json();
  return data;
}