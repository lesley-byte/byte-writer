const reviewId = document.querySelector('input[name="reviewId"]').value;
const updateReviewHandler = async (event) => {
  event.preventDefault();
  const review_text = document.querySelector(
    'textarea[name="review-text"]'
  ).value;
  fetch(`/api/reviews/${reviewId}`, {
    method: 'PUT',
    body: JSON.stringify({ review_text }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.reload();
};
document
  .querySelector('.update-review-btn')
  .addEventListener('click', updateReviewHandler);
