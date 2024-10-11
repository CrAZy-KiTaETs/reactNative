const baseUrl = "https://jsonplaceholder.typicode.com/";

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
