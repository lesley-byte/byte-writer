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
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
