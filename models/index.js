// require the models in the models folder
const User = require('./user');
const Category = require('./category');
const Comment = require('./comment');
const Review = require('./review');
const Tag = require('./tag');
// indicate the relationship between the models... hasMany, belongsTo, etc. as well as the foreign key
User.hasMany(Review, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Review.belongsTo(User, {
  foreignKey: 'userId',
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
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
});

// export the models with module.exports
module.exports = { User, Category, Comment, Review, Tag };
