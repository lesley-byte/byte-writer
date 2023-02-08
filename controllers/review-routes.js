const router = require('express').Router();
const { User, Review, Category, Comment, Tag } = require('../models');
const withAuth = require('../utils/auth');

// GET all reviews
router.get('/', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'userId', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        // {
        //   model: Tag,
        // },
      ],
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    console.log(req.session.userId);
    res.render('homepage', {
      reviews,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one review
router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'userId', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        // {
        //   model: Tag,
        // },
      ],
    });
    const reviews = dbReviewData.get({ plain: true });
    res.render('review', {
      reviews,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
      session: req.session,
    });
console.log(req.session.loggedIn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET add review route
router.get('/add', withAuth, (req, res) => {
  res.render('add-review', {
    loggedIn: req.session.loggedIn,
    userId: req.session.userId,
  });
});

// Get update review route
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'userId', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        // {
        //   model: Tag,
        // },
      ],
    });
    const reviews = dbReviewData.get({ plain: true });
    res.render('updatereview', {
      reviews,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
      session: req.session,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get delete review route
router.get('/delete/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'userId', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        // {
        //   model: Tag,
        // },
      ],
    });

    const reviews = dbReviewData.get({ plain: true });
    res.render('deletereview', {
      reviews,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
      session: req.session,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
