const addCommentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment-text').value;
  const userId = document.querySelector('#userId').value;
  const review_id = document.querySelector('#review-id').value;

  await fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({
      comment_text,
      userId,
      review_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // document.location.reload();
};

document
  .querySelector('.add-comment-form')
  .addEventListener('submit', addCommentFormHandler);

//
