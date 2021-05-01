const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const emailRoutes = require('./emailRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/email', emailRoutes);

module.exports = router;
