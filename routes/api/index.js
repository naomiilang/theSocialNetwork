const router = require('express').Router();
const userRoutes = require('./user-routes');
const friendRoutes = require('./friend-routes');

router.use('/user', userRoutes);
router.use('/friends', friendRoutes);

module.exports = router;
