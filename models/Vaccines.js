onst { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vaccines extends Model { }

Vaccines.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vaccine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trade_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abbreviation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    route: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doses_in_routine_series: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approved_ages: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vaccines',
  }
);

module.exports = vaccines;
