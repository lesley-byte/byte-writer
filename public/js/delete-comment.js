const commentId = document.querySelector('#commentId').value;
const deleteCommentHandler = async (event) => {
  event.preventDefault();
  const response = await fetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
  document.location.replace('/dashboard');
};
document
  .querySelector('#delete-comment-btn')
  .addEventListener('click', deleteCommentHandler);
