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
  {
    title:
      'MySQL is an open-source relational database management system (RDBMS).',
    review_text:
      'Its name is a combination of "My", the name of co-founder Michael Widenius\'s daughter, and "SQL", the abbreviation for Structured Query Language.',
    user_id: 3,
    category_id: 3,
  },
  {
    title:
      'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.',
    review_text:
      'It features solid transaction support, relations, read replication and more.',
    user_id: 4,
    category_id: 4,
  },
  {
    title:
      'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
    review_text:
      'MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.',
    user_id: 5,
    category_id: 5,
  },
  {
    title:
      'Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.',
    review_text: 'Mongoose supports both promises and callbacks.',
    user_id: 6,
    category_id: 6,
  },
  {
    title:
      'React is an open-source, front end, JavaScript library for building user interfaces or UI components.',
    review_text:
      'It is maintained by Facebook and a community of individual developers and companies.',
    user_id: 7,
    category_id: 7,
  },
  {
    title:
      'Redux is an open-source JavaScript library for managing application state.',
    review_text:
      'It is most commonly used with libraries such as React or Angular for building user interfaces.',
    user_id: 8,
    category_id: 8,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
