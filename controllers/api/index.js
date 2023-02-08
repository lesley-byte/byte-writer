const router = require('express').Router();
// also require the routes from the api folder
const commentsRoutes = require('./comments-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes'); // this is the user-routes.js file
// and add them to the router with router.use()
router.use('/comments', commentsRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
