const sequelize = require('../config/connection');
const { User, Vaxx } = require('../models');

const userData = require('./userData.json');
const vaxxData = require('./vaxxData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const userIdStartAt = await sequelize.query(
    'ALTER TABLE user AUTO_INCREMENT = 100000'
  );
  const vaxxIdStartAt = await sequelize.query(
    'ALTER TABLE vaxx AUTO_INCREMENT = 200000'
  );

  try {
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  } catch (err) {
    console.log(err);
  }

  try {
    await Vaxx.bulkCreate(vaxxData, {
      individualHooks: true,
      returning: true,
    });
  } catch (err) {
    console.log(err);
  }

  process.exit(0);
};

seedDatabase();
