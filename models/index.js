const User = require('./User');
const Vaxx = require('./Vaxx');

User.hasMany(Vaxx, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Vaxx.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Vaxx };
