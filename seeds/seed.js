// require sequelize and the models
const sequelize = require('../config/connection');
// require the seed files
const seedUsers = require('./userData');
const seedCategories = require('./categoryData');
const seedTags = require('./tagData');
const seedReviews = require('./reviewData');
const seedComments = require('./commentData');
// create a function to seed the database
// use the sequelize.sync() and the bulkCreate() or create() methods to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedCategories();
  await seedTags();
  await seedReviews();
  await seedComments();
  // close the connection to the database
  process.exit(0);
};
// call the function to seed the database
seedAll();
