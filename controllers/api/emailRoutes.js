const router = require('express').Router();
// const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const email = require('../../utils/email');

// outbound email test

router.post('/', async (req, res, next) => {
  try {
    const mail = await email(
      'jason.e.jones@gmail.com',
      'my first email big sexy',
      'yeah boi i said sexy'
    );
    res.status(200).json(mail);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
