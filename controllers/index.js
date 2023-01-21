const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes = require('./category-routes');
const commentRoutes = require('./comment-routes');
const reviewRoutes = require('./review-routes');
const tagsRoutes = require('./tag-routes');
const userRoutes = require('./user-routes');

// API Routes

router.use('/api');

module.exports = router;
