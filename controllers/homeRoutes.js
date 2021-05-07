const router = require('express').Router();
const { Vaxx, User } = require('../models');
const withAuth = require('../utils/auth');
const { format, parseISO } = require('date-fns');
const makeItAnon = require('../utils/makeItAnon');
router.get('/', async (req, res) => {
  try {
    // Get all Vaxxs and JOIN with user data
    const vaxxData = await Vaxx.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const vaxxs = vaxxData.map((vaxx) => vaxx.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      vaxxs,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/vaxx/:id', async (req, res) => {
  try {
    const vaxxData = await Vaxx.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    const vaxx = vaxxData.get({ plain: true });

    res.render('vaxx', {
      ...vaxx,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    console.log(req.session.user_id);
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Vaxx }],
    });

    const user = userData.get({ plain: true });
    // console.log(user);
    user.vaxxes = user.vaxxes.map((val) => {
      return {
        vaxx_name: val.vaxx_name,
        description: val.description,
        date_created: format(val.date_created, 'yyyy-MM-dd'),
      };
    });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/passport/:id', async (req, res) => {
  try {
    const userData = await User.findOne({
      attributes: { exclude: ['password', 'zipcode', 'email'] },
      where: { vvp_number: req.params.id },
      include: [
        {
          model: Vaxx,
          attributes: ['id', 'vaxx_name', 'description', 'date_created'],
        },
      ],
    });

    if (!userData) {
      // instead of this we need to res.render a 404 HTML page
      res.status(404).json({ message: `No such user id ${req.params.id}` });
      return;
    }
    const user = userData.get({ plain: true });

    user.first_name = makeItAnon(user.first_name);
    user.last_name = makeItAnon(user.last_name);
    res.render('displayPassport', {
      ...user,
      logged_in: true,
      layout: 'plain.handlebars',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// during testing the api if the user was not logged in and attempted a PUT to
// update vaxx given a user, that would be redirected AS A PUT to /login.  So we
// are capturing that here to render the login page.  I mean, the should never
// ever see this except in testing.

router.put('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
