const addReviewFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#review-title').value;
  const review_text = document.querySelector('#review-text').value;
  const userId = document.querySelector('#userId').value;
  const category_id = document.querySelector('#review-category').value;

  await fetch('/api/reviews', {
    method: 'POST',
    body: JSON.stringify({
      title,
      review_text,
      userId,
      category_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  document.location.reload('/dashboard');
};

document
  .querySelector('.add-review-form')
  .addEventListener('submit', addReviewFormHandler);
