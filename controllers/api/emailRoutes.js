const router = require('express').Router();
// const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const email = require('../../utils/email');

// outbound email test
// converting from static email to parameters

router.post('/', withAuth, async (req, res) => {
  try {
    const mail = await email(
      req.body.emailTo,
      req.body.emailSubject,
      req.body.emailBody
    );
    res.status(200).json(mail);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
