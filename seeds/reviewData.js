const { Review } = require('../models');

// reviewData is an array of review objects about tech categories
const reviewData = [
  {
    title:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    review_text:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
    user_id: 1,
    category_id: 1,
  },
  {
    title:
      'Express.js is a back end web application framework for Node.js, released as free and open-source software under the MIT License.',
    review_text:
      'It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    user_id: 2,
    category_id: 2,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
