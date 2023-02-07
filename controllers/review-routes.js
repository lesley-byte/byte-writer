const router = require('express').Router();
const { User, Review, Category, Comment, Tag } = require('../models');

// GET all reviews
router.get('/', async (req, res) => {
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
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Tag,
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
router.get('/:id', async (req, res) => {
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
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: Tag,
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

// GET add review route
router.get('/add', (req, res) => {
  res.render('add-review', {
    loggedIn: req.session.loggedIn,
  });
});

// Get


module.exports = router;
