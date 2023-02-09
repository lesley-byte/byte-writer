const commentId = document.querySelector('#commentId').value;
const updateCommentHandler = async (event) => {
  event.preventDefault();
  const comment_text = document.querySelector(
    'textarea[name="comment-text"]'
  ).value;
  fetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    body: JSON.stringify({ comment_text }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.reload();
};
document
  .querySelector('.update-comment-form')
  .addEventListener('submit', updateCommentHandler);
