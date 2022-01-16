export const getPostComments = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
};
