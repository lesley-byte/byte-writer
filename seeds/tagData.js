const { Tag } = require('../models');
// tagData is an array of objects that will be tags for reviews.
const tagData = [
  {
    tag_name: 'Tech',
  },
  {
    tag_name: 'Gaming',
  },
  {
    tag_name: 'Hardware',
  },
  {
    tag_name: 'Software',
  },
  {
    tag_name: 'Mobile',
  },
  {
    tag_name: 'Web',
  },
  {
    tag_name: 'Design',
  },
  {
    tag_name: 'Development',
  },
  {
    tag_name: 'Programming',
  },
  {
    tag_name: 'Coding',
  },
  {
    tag_name: 'Front End',
  },
  {
    tag_name: 'Back End',
  },
  {
    tag_name: 'Full Stack',
  },
  {
    tag_name: 'API',
  },
  {
    tag_name: 'Database',
  },
  {
    tag_name: 'Cloud',
  },
  {
    tag_name: 'Security',
  },
  {
    tag_name: 'Privacy',
  },
  {
    tag_name: 'Encryption',
  },
  {
    tag_name: 'Data',
  },
  {
    tag_name: 'AI',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
