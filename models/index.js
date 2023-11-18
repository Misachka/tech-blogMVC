const User = require('./User');
const Comments = require('./Comments');
const Blog = require('./Blog');

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Blog.hasMany(Comments, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});
Comments.belongsTo(User, {
  foreignKey: 'user_id'
});
Comments.belongsTo(Blog, {
  foreignKey: 'blog_id'
});

module.exports = { User, Comments, Blog};
