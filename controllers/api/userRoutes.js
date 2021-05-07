const router = require('express').Router();
const withAuth = require('../../utils/auth');
const makeItAnon = require('../../utils/makeItAnon');
const { User, Vaxx } = require('../../models');

//
// we should create admin level access to where only admins
// can run this.  This would be best implemented as an additional
// model of admins so as to not disrupt existing config
// so we should check if an ADMIN is authenticated before allowing this
// to run.
//

router.get('/', async (req, res) => {
  try {
    if (!req.session.logged_in) {
      throw res.status(401).json('Unauthorized');
    }
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    if (!req.session.logged_in) {
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
        res.status(404).json({ message: `No such user id ${req.params.id}` });
        return;
      }
      userData.first_name = makeItAnon(userData.first_name);
      userData.last_name = makeItAnon(userData.last_name);
      return res.status(200).json(userData);
    }

    const userData = await User.findOne({
      attributes: { exclude: ['password'] },
      where: { vvp_number: req.session.user_id },
      include: [
        {
          model: Vaxx,
          attributes: ['id', 'vaxx_name', 'description', 'date_created'],
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ message: `No such user id ${req.params.id}` });
      return;
    }

    return res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.create(req.body);
    console.table(req.body);
    req.session.save(() => {
      req.session.user_id = userData.vvp_number;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.vvp_number;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
