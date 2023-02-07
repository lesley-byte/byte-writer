const addCommentFormHandler = async (event) => {
    event.preventDefault();
     
    const comment_text = document.querySelector('#comment-text').value;
    const user_id = document.querySelector('#user-id').value;
    const review_id = document.querySelector('#review-id').value;
     
    await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
        comment_text,
        user_id,
        review_id,
        }),
        headers: {
        'Content-Type': 'application/json',
        },
    });
     
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to add comment');
    }
    };

document
    .querySelector('.add-comment-form')
    .addEventListener('submit', addCommentFormHandler);

// 