const router = require('express').Router();
const { Vaxx } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newVaxx = await Vaxx.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newVaxx);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedVaxx = await Vaxx.update(
      {
        vaxx_name: req.body.vaxx_name,
        description: req.body.description,
        date_created: req.body.date_created,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedVaxx) {
      res.status(404).json({ message: 'No vaxx_id found with this id' });
      return;
    }

    res.json(updatedVaxx);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const vaxxData = await Vaxx.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!vaxxData) {
      res.status(404).json({ message: 'No Vaccine found with this id!' });
      return;
    }

    res.status(200).json(vaxxData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
