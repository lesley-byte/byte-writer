const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const categoryRoutes = require('./category-routes.js');
const commentRoutes = require('./comment-routes.js');
const reviewRoutes = require('./review-routes.js');
const tagRoutes = require('./tag-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/comments', commentRoutes);
router.use('/reviews', reviewRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
