// require the models in the models folder
const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Review = require('./Review');
const Tag = require('./Tag');
// indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key

// export the models with module.exports
module.exports = { User, Category, Comment, Review, Tag };
