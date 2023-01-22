const router = require('express').Router();
const { User, Review, Category, Comment } = require('../models');

// GET all reviews
router.get('/reviews', async (req, res) => {
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
router.get('/reviews/:id', async (req, res) => {
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

module.exports = router;
