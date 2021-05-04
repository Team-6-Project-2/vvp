const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vaxx extends Model { }

Vaxx.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vaxx_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'user',
        key: 'vvp_number',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vaxx',
  }
);

module.exports = Vaxx;
