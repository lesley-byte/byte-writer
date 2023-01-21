const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const categoryRoutes = require('./category-routes');
const commentRoutes = require('./comment-routes');
const tagsRoutes = require('./tag-routes');
const userRoutes = require('./user-routes');

// API Routes

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/categoryRoutes', categoryRoutes);
router.use('/commentRoutes', commentRoutes);
router.use('/reviewRoutes'), reviewRoutes;
router.use('/tagRoutes', tagsRoutes);
router.use('/users', userRoutes);

module.exports = router;
