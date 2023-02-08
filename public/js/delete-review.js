const reviewId = document.querySelector('input[name="reviewId"]').value;
const deleteReviewHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/reviews/${reviewId}`, {
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
    .querySelector('.delete-review-btn')
    .addEventListener('click', deleteReviewHandler);
