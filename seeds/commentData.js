const { Comment } = require('../models');
// commentData is an array of objects that will be comments about tech category reviews.
const commentData = [
  {
    comment_text: 'I love this product!',
    user_id: 1,
    review_id: 1,
  },
  {
    comment_text: 'I love this product!',
    user_id: 2,
    review_id: 2,
  },
  {
    comment_text: 'I love this product!',
    user_id: 3,
    review_id: 3,
  },
  {
    comment_text: 'I love this product!',
    user_id: 4,
    review_id: 4,
  },
  {
    comment_text: 'I love this product!',
    user_id: 5,
    review_id: 5,
  },
  {
    comment_text: 'I love this product!',
    user_id: 6,
    review_id: 6,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
