const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'HTML',
  },
  {
    category_name: 'CSS',
  },
  {
    category_name: 'JavaScript',
  },
  {
    category_name: 'Node.js',
  },
  {
    category_name: 'Express.js',
  },
  {
    category_name: 'MySQL',
  },
  {
    category_name: 'Sequelize',
  },
  {
    category_name: 'MongoDB',
  },
  {
    category_name: 'Mongoose',
  },
  {
    category_name: 'React',
  },
  {
    category_name: 'Redux',
  },
  {
    category_name: 'Bootstrap',
  },
  {
    category_name: 'Tailwind',
  },
  {
    category_name: 'Bulma',
  },
  {
    category_name: 'Materialize',
  },
  {
    category_name: 'Foundation',
  },
  {
    category_name: 'Semantic UI',
  },
  {
    category_name: 'jQuery',
  },
  {
    category_name: 'AJAX',
  },
  {
    category_name: 'APIs',
  },
  {
    category_name: 'Git',
  },
  {
    category_name: 'GitHub',
  },
  {
    category_name: 'Heroku',
  },
  {
    category_name: 'MongoDB Atlas',
  },
  {
    category_name: 'Jest',
  },
  {
    category_name: 'Mocha',
  },
  {
    category_name: 'Chai',
  },
  {
    category_name: 'Travis CI',
  },
  {
    category_name: 'ESLint',
  },
  {
    category_name: 'Prettier',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
