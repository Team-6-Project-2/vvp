const router = require('express').Router();
const userRoutes = require('./userRoutes');
const vaxxRoutes = require('./vaxxRoutes');
const emailRoutes = require('./emailRoutes');


router.use('/users', userRoutes);
router.use('/vaxxs', vaxxRoutes);
router.use('/email', emailRoutes);




module.exports = router;

