const router = require('express').Router();
const userRoutes = require('./userRoutes');
const vaxxRoutes = require('./vaxxRoutes');
const emailRoutes = require('./emailRoutes');
const covidRoutes = require('./covidRoutes');

router.use('/users', userRoutes);
router.use('/vaxxs', vaxxRoutes);
router.use('/email', emailRoutes);
router.use('/covid', covidRoutes);



module.exports = router;

