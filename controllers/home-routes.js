const router = require('express').Router();
const { User, Review, Comment, Category } = require('../models');
const withAuth = require('../utils/auth');

// GET all reviews for homepage
router.get('/', async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
      ],
    });
    const reviews = dbReviewData.map((review) => review.get({ plain: true }));
    res.render('homepage', {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one review
router.get('/review/:id', withAuth, async (req, res) => {
  try {
    const dbReviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Category,
          attributes: ['category_name'],
        },
      ],
    });
    const review = dbReviewData.get({ plain: true });
    res.render('review', {
      review,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
