// require the models in the models folder
const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Review = require('./Review');
const Tag = require('./Tag');
// indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key
User.hasMany(Review, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Review.belongsTo(User, {
  foreignKey: 'user_id',
});
Category.hasMany(Review, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
Review.belongsTo(Category, {
  foreignKey: 'category_id',
});
Review.hasMany(Comment, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE',
});
Comment.belongsTo(Review, {
  foreignKey: 'review_id',
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// export the models with module.exports
module.exports = { User, Category, Comment, Review, Tag };
